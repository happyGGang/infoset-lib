import Title from '../../title';
import styles from './promotion.module.css';
import React, { useEffect, useState } from 'react';
import weather from '../../../assets/img/media/type_a/weather.svg';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PromotionA: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  const handleZoomClick = () => setIsFullScreen(false);

  return (
    <div>
      <Title title={'홍보동영상'} />
      <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
        {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
        <div className={isFullScreen ? styles.f_header : styles.header}>
          <div className={isFullScreen ? styles.f_header_title_kr : styles.header_title_kr}>
            홍보동영상
          </div>
          <div className={isFullScreen ? styles.f_header_title_en : styles.header_title_en}>
            PROMOTION VIDEO
          </div>
        </div>
        <div className={isFullScreen ? styles.f_content : styles.content}>
          <div className={isFullScreen ? styles.f_clock_wrapper : styles.clock_wrapper}>
            <div className={isFullScreen ? styles.f_lib : styles.lib}>INFOSET</div>
            <div className={isFullScreen ? styles.f_clock : styles.clock}>
              <div
                className={isFullScreen ? styles.f_hand : styles.hand}
                style={{ transform: `rotate(${hourDeg}deg)` }}
              ></div>
              <div
                className={isFullScreen ? styles.f_hand : styles.hand}
                style={{ transform: `rotate(${minuteDeg}deg)` }}
              ></div>
              <div
                className={isFullScreen ? styles.f_hand : styles.hand}
                style={{ transform: `rotate(${secondDeg}deg)` }}
              ></div>
            </div>
            <div className={isFullScreen ? styles.f_date : styles.date}>2024년 05월 22일 (수)</div>
            <div
              className={isFullScreen ? styles.f_time : styles.time}
            >{`${hours}:${minutes < 10 ? `0${minutes}` : minutes}`}</div>
          </div>
          <div className={isFullScreen ? styles.f_video : styles.video}>
            <iframe
              width={isFullScreen ? '1236' : '772.5'} // 772.5 * 1.6
              height={isFullScreen ? '694' : '434.375'} // 434.375 * 1.6
              src="https://www.youtube.com/embed/J7ituRWwwxk?autoplay=1&mute=1&loop=1&playlist=J7ituRWwwxk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className={isFullScreen ? styles.f_weather_wrapper : styles.weather_wrapper}>
            <div className={isFullScreen ? styles.f_label : styles.label}>TODAY'S WEATHER</div>
            <div className={isFullScreen ? styles.f_perceived : styles.perceived}>체감 31.4°</div>
            <img src={weather} alt="" className={isFullScreen ? styles.f_icon : styles.icon} />
            <div className={isFullScreen ? styles.f_temperature : styles.temperature}>30.8°</div>
            <div className={isFullScreen ? styles.f_description : styles.description}>
              구름 조금
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionA;
