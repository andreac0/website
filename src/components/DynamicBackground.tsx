import { useEffect, useRef } from "react";
import * as d3 from "d3";

// Define Node & Link types
interface Node extends d3.SimulationNodeDatum {
  id: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  radius?: number; // Add radius property
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: number | Node;
  target: number | Node;
}

export default function DynamicGraphBackground() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("position", "absolute")
      .style("top", "0")
      .style("left", "0")
      .style("zIndex", "-1")
      .style(
        "background",
        "radial-gradient(circle at center, rgba(30, 20, 40, 1), #100b16ff 40%, #1a0c20ff 100%)" // Darker, more muted background
      );

    // Nodes and links
    const nodes: Node[] = d3.range(100).map((d) => ({
      id: d,
      radius: Math.random() * 15 + 5, // Assign a random radius between 5 and 20
    }));
    const links: Link[] = d3.range(90).map(() => ({
      source: Math.floor(Math.random() * nodes.length),
      target: Math.floor(Math.random() * nodes.length),
    }));

    const simulation = d3
      .forceSimulation<Node>(nodes)
      .force(
        "link",
        d3
          .forceLink<Node, Link>(links)
          .distance(220) // ⬅ increase distance between nodes
          .strength(0.8)
      )
      .force("charge", d3.forceManyBody().strength(-190)) // ⬅ stronger repulsion
      .force("center", d3.forceCenter(width / 2, height / 2)) // Center the graph initially
      .force("x", d3.forceX(width / 2).strength(0.05)) // Adjust x-force to center
      .force("y", d3.forceY(height / 2).strength(0.05)) // Adjust y-force to center
      .alphaDecay(0.00005); // continuous movement

    const link = svg
      .append("g")
      .attr("stroke", "#f4e8e8ff") // brighter edges
      .attr("stroke-opacity", 0.1)
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke-width", 1);

    const node = svg
      .append("g")
      .attr("stroke", "#5b4a6b") // Slightly darker stroke for nodes
      .attr("stroke-width", 0.6) // Slightly thicker stroke for better definition
      .selectAll<SVGCircleElement, Node>("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", (d) => d.radius ?? 10) // Use node's radius property
      .attr("fill", "#8a6fa0") // More coherent purple tone
      .call(
        d3
          .drag<SVGCircleElement, Node>()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    simulation.on("tick", () => {
      link
        .attr("x1", (d) => (d.source as Node).x ?? 0)
        .attr("y1", (d) => (d.source as Node).y ?? 0)
        .attr("x2", (d) => (d.target as Node).x ?? 0)
        .attr("y2", (d) => (d.target as Node).y ?? 0);

      node.attr("cx", (d) => d.x ?? 0).attr("cy", (d) => d.y ?? 0);
    });

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      svg.attr("width", width).attr("height", height);
      simulation.force("center", d3.forceCenter(width / 2, height / 2));
      simulation.force("x", d3.forceX(width / 2).strength(0.05)); // Recenter x-force
      simulation.force("y", d3.forceY(height / 2).strength(0.05)); // Recenter y-force
      simulation.alpha(1).restart();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      simulation.stop();
    };
  }, []);

  return <svg ref={svgRef}></svg>;
}

