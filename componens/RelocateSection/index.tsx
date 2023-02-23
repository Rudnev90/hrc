import { Button, Col, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import descriptionIcon from '~/assets/relocate-section/description-icon.svg';
import vacationImage from '~/assets/relocate-section/vacation.png';

import styles from './SectionRelocate.module.css';

export default function RelocateSection() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.wrapper}>
      <Row align="middle">
        <Col span={14}>
          <h1 className={styles.title}>
            {t('relocateSection.title')}
          </h1>
          <div className={styles.description}>
            <Image
              className={styles.descriptionIcon}
              alt='relocation-icon'
              width={36}
              height={36}
              src={descriptionIcon}
            />
            <div dangerouslySetInnerHTML={{ __html: t('relocateSection.description')}} />
          </div>
          <Button className={styles.descriptionButton} type="primary">
            {t('relocateSection.button')}
          </Button>
        </Col>
        <Col span={10}>
          <Image width={484} height={592} alt="vacation" src={vacationImage} />
        </Col>
      </Row>
    </div>
  );
}