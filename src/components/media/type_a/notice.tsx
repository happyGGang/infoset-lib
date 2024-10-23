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
    slidesToScroll: 1,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'linear',
    className: '123123',
  };

  return (
    <div>
      <Title title={'공지사항'} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>공지사항</div>
          <div className={styles.header_title_en}>NOTICE</div>
        </div>
        <Slider {...settings}>
          {NOTICE.map(({ id, image, title }) => (
            <div className={styles.wrapper} key={id}>
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
