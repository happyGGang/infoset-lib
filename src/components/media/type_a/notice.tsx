import React from 'react';
import Title from '../../title';
import styles from './notice.module.css';
import { NOTICE } from '../../../constants/media.constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Notice: React.FC = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    className: 'slide_container',
  };

  return (
    <div>
      <Title title={'공지사항'} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>공지사항</div>
          <div className={styles.header_title_en}>NOTICE</div>
        </div>
        <Slider {...settings} className={styles.slider_container}>
          {NOTICE.map(({ id, image, title }) => (
            <div key={id} className={styles.wrapper}>
              <div
                style={{ background: `url(${image}) center center no-repeat` }}
                className={styles.img}
              />
              <div className={styles.title}>{title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Notice;
