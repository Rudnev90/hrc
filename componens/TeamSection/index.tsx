import { Col, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

import ikImage from '~/assets/team-section/ik.png';
import polyzazaImage from '~/assets/team-section/polyzaza.png';
import softedImage from '~/assets/team-section/softed.png';

import styles from './TeamSection.module.css';

export default function TeamSection() {
  const { t } = useTranslation('common');

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: t('teamSection.title')}} />
      <div className={styles.description} dangerouslySetInnerHTML={{ __html: t('teamSection.description')}} />
      <div className={styles.list}>
        <Row>
          <Col span={8}>
            <div className={styles.item}>
              <Image alt='polyzaza' width={160} height={160} src={polyzazaImage} />
              <div className={styles.itemTitle}>polyzaza</div>
              <div className={styles.itemDescription}>Co-Founder & Cyprus<br/> Ambassador</div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.item}>
              <Image alt='polyzaza' width={160} height={160} src={ikImage} />
              <div className={styles.itemTitle}>I K</div>
              <div className={styles.itemDescription}>Analyst & Head of <br/>Optimism</div>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.item}>
              <Image alt='polyzaza' width={160} height={160} src={softedImage} />
              <div className={styles.itemTitle}>softed</div>
              <div className={styles.itemDescription}>Product manager & <br/>Truth Advisor</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}