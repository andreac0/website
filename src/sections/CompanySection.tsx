import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Publication from '../components/Publication';
import { useTranslations } from '../context/TranslationContext';

const CompanySection: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="company" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          title={t("company")}
          subtitle={t("subtitle_company_section")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center mb-24">
          <Card className="flex flex-col items-center p-8 overflow-hidden">
            <img
              src="./images/spinoffPoli.png"
              alt="Polimi Spin-Off Logo"
              className="w-80 h-auto mb-6 opacity-90"
              onError={(e) => { e.currentTarget.src = './images/spinoffPoli.png'; }}
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug text-center">
              <a href="https://www.polimi.it/ricerca/trasferimento-tecnologico/spin-off" target="_blank" rel="noopener noreferrer" className="hover:underline text-purple-700">
                Polimi Spin-Off
              </a>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed text-left">{t("subtitle_spinoff_polimi")}</p>
          </Card>

          <Card className="flex flex-col items-center p-8 overflow-hidden">
            <img
              src="./images/premioParlamento.jpg"
              alt="Awarded Research"
              className="w-80 h-auto mb-6 opacity-90"
              onError={(e) => { e.currentTarget.src = './images/premioParlamento.jpg'; }}
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug text-center">
              <a href="https://comunicazione.camera.it/archivio-prima-pagina/19-42168" target="_blank" rel="noopener noreferrer" className="hover:underline text-purple-700">
                {t("awarded_research")}
              </a>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed text-left">{t("subtitle_awarded_research")}</p>
          </Card>
        </div>

        <SectionHeading
          title={t("our_scientific_publications")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch">
          <Publication
            year="2025"
            title="An LLM-assisted ETL pipeline to build a high-quality knowledge graph of the Italian legislation."
            journal="In: Information Processing and Management"
            link="https://www.sciencedirect.com/science/article/pii/S030645732500024X"
          />
          <Publication
            year="2025"
            title="Legislative Knowledge Management with Property Graphs"
            journal="In: Proceedings of the EDBT25 Workshops"
            link="https://ceur-ws.org/Vol-3946/TGD-1.pdf"
          />
          <Publication
            year="2024"
            title="Leveraging Knowledge Graphs and LLMs to Support and Monitor Legislative Systems"
            journal="In: Proceedings of the 33rd CIKM Conference"
            link="https://dl.acm.org/doi/10.1145/3627673.3680268"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanySection;

