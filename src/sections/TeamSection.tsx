import React from 'react';
import SectionHeading from '../components/SectionHeading';
import TeamMember from '../components/TeamMember';
import { useTranslations } from '../context/TranslationContext';

const TeamSection: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="team" className="py-20 md:py-32 bg-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading
          title={t("our_team")}
          underlineColor="bg-blue-500"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          <TeamMember imagePath="./images/people/andrea.jpeg" name="Andrea Colombo" position="Chief Executive Officer" />
          <TeamMember imagePath="./images/people/francesco.jpeg" name="Francesco Invernici" position="Chief Technology Officer" />
          <TeamMember imagePath="./images/people/chiara.jpeg" name="Chiara Leonardi" position="Chief Design Officer" />
          <TeamMember imagePath="./images/people/claudio.jpeg" name="Claudio Michelacci" position="Chief Revenue Officer" />
          <TeamMember imagePath="./images/people/anna.jpeg" name="Anna Bernasconi" position="Scientific Advisor" />
          <TeamMember imagePath="./images/people/stefano.jpeg" name="Stefano Ceri" position="Scientific Advisor" />
          <TeamMember imagePath="./images/people/luigi.jpeg" name="Luigi Guiso" position="Scientific Advisor" />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
