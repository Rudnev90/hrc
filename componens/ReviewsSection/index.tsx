import useTranslation from 'next-translate/useTranslation';

import ReviewsSectionSlider from '../ReviewsSectionSlider';

import styles from './ReviewsSection.module.css';

export default function ReviewsSection() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: t('reviewsSection.title')}} />
      <ReviewsSectionSlider />
    </div>
  );
}