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
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 7000,
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

              <h3>{event.title}</h3>
              <p>{event.time}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Event;
