import useTranslation from 'next-translate/useTranslation';

import styles from './HowItWorksSection.module.css';

export default function HowItWorksSection() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: t('howItWorksSection.title')}} />
      <ul className={styles.list}>
        <li dangerouslySetInnerHTML={{ __html: t('howItWorksSection.list.1')}} />
        <li dangerouslySetInnerHTML={{ __html: t('howItWorksSection.list.2')}} />
        <li dangerouslySetInnerHTML={{ __html: t('howItWorksSection.list.3')}} />
        <li dangerouslySetInnerHTML={{ __html: t('howItWorksSection.list.4')}} />
      </ul>
    </div>
  );
}