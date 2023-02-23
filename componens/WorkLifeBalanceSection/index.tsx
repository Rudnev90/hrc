import { Col, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import lifeBalaceImage from '~/assets/life-balance-section/life-balance.png';

import styles from './WorkLifeBalanceSection.module.css';


export default function WorkLifeBalanceSection() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.wrapper}>
        <Row align="top">
          <Col span={14}>
            <Image alt="life-balance" width={455} height={320} src={lifeBalaceImage} />
          </Col>
          <Col span={10}>
            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: t('workLifeBalanceSection.title')}} />
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: t('workLifeBalanceSection.description')}}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}