import React, { useEffect, useState } from 'react';
import styles from './event.module.css';
import { EVENT } from '../../../constants/media.constants';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventA: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleZoomClick = () => setIsFullScreen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % EVENT.length);
    }, 8000); // 8초마다 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
      {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
      <div className={isFullScreen ? styles.f_header : styles.header}>
        <div className={isFullScreen ? styles.f_header_title_kr : styles.header_title_kr}>
          행사안내
        </div>
        <div className={isFullScreen ? styles.f_header_title_en : styles.header_title_en}>
          LIBRARY EVENT
        </div>
      </div>
      <div className={styles.slide_wrapper}>
        {EVENT.map((event, index) => (
          <div
            key={event.id}
            className={`${styles.event} ${index === currentIndex ? styles.show : styles.hide}`}
          >
            <div className={isFullScreen ? styles.f_wrapper : styles.wrapper}>
              <div className={isFullScreen ? styles.f_event_info : styles.event_info}>
                <span>시간</span>
                {event.time}
              </div>
              <div className={isFullScreen ? styles.f_event_info : styles.event_info}>
                <span>장소</span>
                {event.location}
              </div>
            </div>
            <div className={isFullScreen ? styles.f_event_title : styles.event_title}>
              {event.title}
            </div>
          </div>
        ))}
      </div>
      <div className={isFullScreen ? styles.f_dot_container : styles.dot_container}>
        {EVENT.map((_, index) => (
          <div
            key={index}
            className={`${isFullScreen ? styles.f_dot : styles.dot} ${index === currentIndex ? (isFullScreen ? styles.f_active : styles.active) : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EventA;
