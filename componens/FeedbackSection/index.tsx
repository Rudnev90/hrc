import { Button, Col, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import ticketsImage from '~/assets/feedback-section/tickets.png';

import styles from './FeedbackSection.module.css';

export default function FeedbackSection() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.wrapper}>
        <Row align="middle">
          <Col span={14}>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: t('feedbackSection.title')}} />
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: t('feedbackSection.description')}}
            />
            <Button className={styles.descriptionButton} type="primary">
              {t('feedbackSection.button')}
            </Button>
          </Col>
          <Col span={10}>
            <Image width={520} height={520} alt="vacation" src={ticketsImage} />
          </Col>
        </Row>
      </div>
    </div>
  );
}