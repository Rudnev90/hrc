import { Col, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import climateIcon from '~/assets/benefits-section/climate-icon.svg';
import cuisineIcon from '~/assets/benefits-section/cuisine-icon.svg';
import educationIcon from '~/assets/benefits-section/education-icon.svg';
import medicineIcon from '~/assets/benefits-section/medicine-icon.svg';
import natureIcon from '~/assets/benefits-section/nature-icon.svg';
import safetyIcon from '~/assets/benefits-section/safety-icon.svg';

import styles from './BenefitsSection.module.css';
export default function BenefitsSection() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{t('benefitsSection.title')}</h2>
      <Row gutter={30}>
        <Col span={8}>
          <div>
            <Image alt="climate-icon" width={104} height={104} src={climateIcon} />
          </div>
          <h2 className={styles.itemTitle}>{t('benefitsSection.climate.title')}</h2>
          <div className={styles.itemDescription}>{t('benefitsSection.climate.description')}</div>
        </Col>
        <Col span={8}>
          <div>
            <Image alt="cuisine-icon" width={104} height={104} src={cuisineIcon} />
          </div>
          <h2 className={styles.itemTitle}>{t('benefitsSection.cuisine.title')}</h2>
          <div className={styles.itemDescription}>{t('benefitsSection.cuisine.description')}</div>
        </Col>
        <Col span={8}>
          <div>
            <Image alt="nature-icon" width={104} height={104} src={natureIcon} />
          </div>
          <h2 className={styles.itemTitle}>{t('benefitsSection.nature.title')}</h2>
          <div className={styles.itemDescription}>{t('benefitsSection.nature.description')}</div>
        </Col>
        <Col span={8}>
          <div>
            <Image alt="safety-icon" width={104} height={104} src={safetyIcon} />
          </div>
          <h2 className={styles.itemTitle}>{t('benefitsSection.safety.title')}</h2>
          <div className={styles.itemDescription}>{t('benefitsSection.safety.description')}</div>
        </Col>
        <Col span={8}>
          <div>
            <Image alt="medicine-icon" width={104} height={104} src={medicineIcon} />
          </div>
          <h2 className={styles.itemTitle}>{t('benefitsSection.medicine.title')}</h2>
          <div className={styles.itemDescription}>{t('benefitsSection.medicine.description')}</div>
        </Col>
        <Col span={8}>
          <div>
            <Image alt="education-icon" width={104} height={104} src={educationIcon} />
          </div>
          <h2 className={styles.itemTitle}>{t('benefitsSection.education.title')}</h2>
          <div className={styles.itemDescription}>{t('benefitsSection.education.description')}</div>
        </Col>
      </Row>
    </div>
  );
}