import React, { useEffect, useState } from 'react';
import styles from './event.module.css';
import { EVENT } from '../../../constants/media.constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Zoom from '../../zoom';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventB: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEvent, setShowEvent] = useState(true);

  const handleZoomClick = () => setIsFullScreen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEvent(false); // 이벤트 숨기기
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % EVENT.length);
        setShowEvent(true);
      }, 600);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Zoom isFullScreen={isFullScreen} onClick={() => setIsFullScreen(false)} />
      <div className={styles.header}>
        <div className={styles.header_title_kr}>행사안내</div>
        <div className={styles.header_title_en}>LIBRARY EVENT</div>
      </div>
      <div className={styles.slide_wrapper}>
        <div
          key={EVENT[currentIndex].id}
          style={{ height: '16.5rem' }}
          className={`${styles.event} ${showEvent ? styles.show : styles.hide}`}
        >
          <div className={styles.label}>TODAY'S EVENT</div>
          <div className={styles.event_title}>{EVENT[currentIndex].title}</div>
          <div className={styles.wrapper}>
            <div className={styles.event_info}>
              <span>시간</span>
              {EVENT[currentIndex].time}
            </div>
            <div className={styles.event_info}>
              <span>장소</span>
              {EVENT[currentIndex].location}
            </div>
          </div>
        </div>
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
  );
};

export default EventB;
