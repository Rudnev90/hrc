import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import styles from './TeamSectionSlider.module.css';

export default function TeamSectionSlider() {
  const settings = {
      className: `variable-width ${styles.slider}`,
      dots: true,
      slidesPerRow: 1,
      variableWidth: true,
      infinite: false,
      centerMode: true,
      arrows: false,
    };
  return (
    <div style={{ maxWidth: '960px', width: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div style={{ width: 464 }}>
          <p>464</p>
        </div>
        <div style={{ width: 464 }}>
          <p>464</p>
        </div>
        <div style={{ width: 464 }}>
          <p>464</p>
        </div>
        <div style={{ width: 464 }}>
          <p>464</p>
        </div>
      </Slider>
    </div>
  );
}