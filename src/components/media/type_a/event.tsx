import React, { useEffect, useState } from 'react';
import styles from './event.module.css';
import { EVENT } from '../../../constants/media.constants';
import Full from '../../full_screen';

const EventA: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % EVENT.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.f_wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>행사안내</div>
          <div className={styles.header_title_en}>LIBRARY EVENT</div>
        </div>
        <div className={styles.slide_wrapper}>
          {EVENT.map((event, index) => (
            <div
              key={event.id}
              className={`${styles.event} ${index === currentIndex ? styles.show : styles.hide}`}
            >
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
        </div>
        <div className={styles.dot_container}>
          {EVENT.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            ></div>
          ))}
        </div>
      </div>
      <Full disabled={false} onClick={() => console.log(123)} />
    </div>
  );
};

export default EventA;
