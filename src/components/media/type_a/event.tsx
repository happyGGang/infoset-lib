import React from 'react';
import Title from '../../title';
import styles from './event.module.css';
import { EVENT } from '../../../constants/media.constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Event: React.FC = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: 'linear',
    appendDots: (dots: any) => (
      <div style={{ bottom: '-62.9px' }}>
        <ul style={{ display: 'flex', gap: '8.75px', justifyContent: 'center' }}>
          {dots.map((dot: any, index: number) => (
            <li
              key={index}
              className={dot.props.className}
              style={{
                width: '7.5px',
                height: '7.5px',
                backgroundColor: dot.props.className.includes('slick-active')
                  ? '#FFFFFF'
                  : '#ADB5BD',
                borderRadius: '50%',
                transition: 'background-color 0.8s ease',
              }}
            />
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div>
      <Title title={'행사안내'} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>행사안내</div>
          <div className={styles.header_title_en}>LIBRARY EVENT</div>
        </div>
        <Slider {...settings}>
          {EVENT.map((event) => (
            <div key={event.id}>
              <div className={styles.wrapper}>
                <div className={styles.event_info}>
                  <span>시간</span>
                  {event.time}
                </div>
                <div className={styles.event_info}>
                  <span>장소</span>
                  {event.location}
                </div>
              </div>
              <div className={styles.event_title}>{event.title}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Event;
