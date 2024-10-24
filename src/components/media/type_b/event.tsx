import React, { useEffect, useState } from 'react';
import styles from './event.module.css';
import { EVENT } from '../../../constants/media.constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        setShowEvent(true); // 이벤트 다시 표시
      }, 600); // CSS와 일치하도록 설정
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
      <div className={isFullScreen ? styles.f_slide_wrapper : styles.slide_wrapper}>
        <div
          key={EVENT[currentIndex].id}
          style={{ height: '625px' }}
          className={`${styles.event} ${showEvent ? styles.show : styles.hide}`}
        >
          <div className={isFullScreen ? styles.f_label : styles.label}>TODAY'S EVENT</div>
          <div className={isFullScreen ? styles.f_event_title : styles.event_title}>
            {EVENT[currentIndex].title}
          </div>
          <div className={isFullScreen ? styles.f_wrapper : styles.wrapper}>
            <div className={isFullScreen ? styles.f_event_info : styles.event_info}>
              <span>시간</span>
              {EVENT[currentIndex].time}
            </div>
            <div className={isFullScreen ? styles.f_event_info : styles.event_info}>
              <span>장소</span>
              {EVENT[currentIndex].location}
            </div>
          </div>
        </div>
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

export default EventB;
