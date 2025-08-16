import React from 'react';
import SectionHeading from '../components/SectionHeading';
import FeatureBlock from '../components/FeatureBlock';
import { useTranslations } from '../context/TranslationContext';

const TechnologySection: React.FC = () => {
  const { t } = useTranslations();

  return (
    <section id="technology" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t("technology_and_solutions")}
          subtitle={t("subtitle_technology_and_solutions")}
        />
      </div>
      <FeatureBlock
        title={t("advanced_search_engine")}
        subtitle1={t("subtitle_advanced_search_engine")}
        subtitle2={t("subtitle_advanced_search_engine_2")}
        imagePath="https://placehold.co/1920x1080/E0F2F7/000000?text=Abstract+AI+Search+Visual"
        reverseLayout={false}
      />
      <FeatureBlock
        title={t("monitoring_system")}
        subtitle1={t("subtitle_monitoring_system")}
        subtitle2={t("subtitle_monitoring_system_2")}
        imagePath="https://placehold.co/1920x1080/E8F5E9/000000?text=Abstract+Monitoring+Visual"
        reverseLayout={true}
      />
      <FeatureBlock
        title={t("content_provision_service")}
        subtitle1={t("subtitle_content_provision_service")}
        subtitle2={t("subtitle_content_provision_service_2")}
        imagePath="https://placehold.co/1920x1080/F3E5F5/000000?text=Abstract+Content+Visual"
        reverseLayout={false}
      />
      <FeatureBlock
        title={t("data_integration_service")}
        subtitle1={t("subtitle_data_integration_service")}
        subtitle2={t("subtitle_data_integration_service_2")}
        imagePath="https://placehold.co/1920x1080/E1F5FE/000000?text=Abstract+Integration+Visual"
        reverseLayout={true}
      />
    </section>
  );
};

export default TechnologySection;
