import React from 'react';
import { Calendar, CheckSquare, Target, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ValueProposition from '../components/ValueProposition';
import Button from '../components/Button';
import { useTranslations } from '../context/TranslationContext';

const SolutionsSection: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="solutions" className="py-20 md:py-32 bg-gradient-to-br from-purple-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('/images/GeometricPattern.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(3px)' }}></div>
      <div className="container mx-auto px-6 z-10">
        <SectionHeading
          title={t("why_choose_us")}
          underlineColor="bg-blue-400"
          textColor="text-white"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          <ValueProposition
            icon={<Calendar className="text-purple-600" size={40} />}
            title={t("up_to_date")}
            description={t("subtitle_up_to_date")}
          />
          <ValueProposition
            icon={<CheckSquare className="text-purple-600" size={40} />}
            title={t("zero_hallucination")}
            description={t("subtitle_zero_hallucination")}
          />
          <ValueProposition
            icon={<Target className="text-purple-600" size={40} />}
            title={t("hundred_percent_relevance")}
            description={t("subtitle_hundred_percent_relevance")}
          />
        </div>
        <div className="text-center mt-20">
          <Button
            variant="secondary"
            size="lg"
            icon={<ArrowRight size={24} />}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t("contact_us")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
