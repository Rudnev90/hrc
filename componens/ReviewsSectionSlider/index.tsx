import { Card } from 'antd';
import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import AleksandrImage from '~/assets/reviews-section/aleksandr.png';
import AnnaImage from '~/assets/reviews-section/anna.png';
import ArtemImage from '~/assets/reviews-section/artem.png';
import IkImage from '~/assets/reviews-section/ik.png';

import styles from './ReviewsSection.module.css';

export default function ReviewsSectionSlider() {
  const settings = {
      className: `variable-width team-section-slider`,
      dots: true,
      dotsClass: 'team-section-slider__dots',
      variableWidth: true,
      infinite: false,
      centerMode: true,
      arrows: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
      appendDots: (dots: JSX.Element[]) => (
        <ul>
          {dots}
        </ul>
      )
    };
  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        <div className={styles.wrapper}>
          <Card className={styles.card}>
            <div>
              Не мечтал о переезде на Кипр, получилось довольно спонтанно и реальность превзошла ожидания. Солнечно круглый год, отличное море, добрые люди. Компания предоставляет множество бенефитов для комфортной работы, а также сильную команду с хорошими специалистами и интересными проектами.
            </div>
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <Image className={styles.image} alt='Backend Team Lead, Wisebits' height={48} width={48} src={AleksandrImage} />
              </div>
              <div className={styles.infoRight}>
                <div className={styles.name}>Артем Остапец</div>
                <div>Backend Team Lead, Wisebits</div>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.wrapper}>
          <Card className={styles.card}>
            <div>
              Хочу сказать огромное спасибо Полине за возможность, которая полностью изменила мою жизнь в лучшую сторону.<br/> <br/> Когда я только-только прилетела на Кипр Полина предложила мне вакансию “Affiliate Manager” в сфере IGaming: <br/>  Собеседование было хорошо организовано, ничего не переносили. Ответ долго ждать не пришлось. работодатель через несколько дней предложил job offer в бумажной форме. Самое важно, что и в дальнейшем , с любыми вопросами касаемо документов на визу Полина всегда была на связи; Спрашивала нравится ли мне все, как проходит мой процесс адаптации.<br/> <br/> В своей компании я пол года, но уже полетела бы в Лондон в феврале на конференцию, если бы ее не перенесли из-за ногого штампа вируса.<br/> <br/> Так что, если в будущем решу менять работу, то в первую очередь напишу Полине. Она тот самый HR-друг, а не тех, кого боятся
            </div>
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <div>
                  <Image className={styles.image} alt='Backend Team Lead, Wisebits' height={48} width={48} src={AnnaImage} />
                </div>
              </div>
              <div className={styles.infoRight}>
                <div className={styles.name}>Анна Балашова</div>
                <div>Affiliate Manager</div>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.wrapper}>
          <Card className={styles.card}>
            <div>
              На Кипр первый раз приехал в августе 2021, остров очень понравился и уезжать вообще не хотелось. Работаю я в IT индустрии и так как на Кипре большое IT комьюнити, решил остаться, под искать работу. Обратился к данным ребятам, обновил резюме, отправил. Предложения по работе начали поступать уже на следующий день и спустя 4 дня у меня за плечами были 6 собеседований и два джоб офера! В общем, хочу передать свой большой привет и благодарность данному сервису и ребятам которые работают там не ради работы!
            </div>
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                 <Image className={styles.image} alt='Backend Team Lead, Wisebits' height={48} width={48} src={ArtemImage} />
              </div>
              <div className={styles.infoRight}>
                <div className={styles.name}>Александр Горбунов</div>
                <div>UA Manager, 22Bet</div>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.wrapper}>
          <Card className={styles.card}>
            <div>
              Sunny weather, sea breeze and 15-minute commute, what's more to wish for?
            </div>
            <div className={styles.info}>
              <div className={styles.infoLeft}>
                <Image className={styles.image} alt='Backend Team Lead, Wisebits' height={48} width={48} src={IkImage} />
              </div>
              <div className={styles.infoRight}>
                <div className={styles.name}>Mikhail Bashurov</div>
                <div>Frontend Developer, Wisebits</div>
              </div>
            </div>
          </Card>
        </div>
      </Slider>
    </div>
  );
}