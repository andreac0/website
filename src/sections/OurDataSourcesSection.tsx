import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from '../context/TranslationContext';

const OurDataSourcesSection: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <SectionHeading
          title={t("our_data_sources")}
          subtitle={t("subtitle_our_data_sources")}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-stretch">
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("national_legislation")}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_national_legislation")}</p>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("regional_legislation")}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_regional_legislation")}</p>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("european_legislation")}</h3 >
            <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_european_legislation")}</p>
          </Card>
          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">{t("court_decisions")}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{t("subtitle_court_decisions")}</p>
          </Card>
        </div>
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("need_a_different_data_source")}</h3>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            {t("subtitle_need_a_different_data_source")}
          </p>
          <Button
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

export default OurDataSourcesSection;
