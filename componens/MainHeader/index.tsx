import { useMemo } from 'react';

import { LoginOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import enLocaleIcon from '~/assets/commons/en-locale-icon.svg';
import Logo from '~/assets/commons/logo.png';
import ruLocaleIcon from '~/assets/commons/ru-locale-icon.svg';

import styles from './MainHeader.module.css';

export default function MainHeader() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const currentLang = useMemo(() => {
    return router.locale;
  }, [router]);

  return (
    <header className={styles.headerMain}>
      <Row>
        <Col span={5}>
          <Image alt="logo" src={Logo} width={168} height={38} />
        </Col>
        <Col span={14}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/" locale="en">{t('mainMenu.why')}</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/" locale="en">{t('mainMenu.about')}</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/" locale="en">{t('mainMenu.how')}</Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/" locale="en">{t('mainMenu.lookingEmployees')}</Link>
            </li>
          </ul>
        </Col>
        <Col span={5}>
          <div className={styles.left}>
            <div className={styles.locale}>
              <Link className={styles.localeLink} href="/" locale={currentLang === 'ru' ? 'en' : 'ru'}>
                {
                  currentLang === 'en' ?
                  <Image
                    className={styles.localeIcon}
                    alt="ru-locale"
                    width={28}
                    height={20}
                    src={ruLocaleIcon}
                  /> :
                  <Image
                    className={styles.localeIcon}
                    alt="ru-locale"
                    width={28}
                    height={20}
                    src={enLocaleIcon}
                  />
                }
                <span>{currentLang === 'en' ? 'RU' : 'EN'}</span>
              </Link>
            </div>
            <Link href="/sign">
              <LoginOutlined className={styles.sign}/>
              {t('mainMenu.sign')}
            </Link>
          </div>
        </Col>
      </Row>
    </header>
  );
}