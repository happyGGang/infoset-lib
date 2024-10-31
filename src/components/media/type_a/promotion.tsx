import styles from './promotion.module.css';
import React, { useEffect, useState } from 'react';
import weather from '../../../assets/img/media/type_a/weather.svg';
import Zoom from '../../zoom';
import promotion from '../../../assets/media/promotion.mp4';
import Full from '../../full_screen';
import { useFullPageStore } from '../../../store/full_page.store';

const PromotionA: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const { toggleFullPage } = useFullPageStore();

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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>홍보동영상</div>
          <div className={styles.header_title_en}>PROMOTION VIDEO</div>
        </div>
        <div className={styles.content}>
          <div className={styles.clock_wrapper}>
            <div className={styles.lib}>INFOSET</div>
            <div className={styles.clock}>
              <div className={styles.hand} style={{ transform: `rotate(${hourDeg}deg)` }}></div>
              <div className={styles.hand} style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
              <div className={styles.hand} style={{ transform: `rotate(${secondDeg}deg)` }}></div>
            </div>
            <div className={styles.date}>2024년 05월 22일 (수)</div>
            <div
              className={styles.time}
            >{`${hours}:${minutes < 10 ? `0${minutes}` : minutes}`}</div>
          </div>

          <video src={promotion} className={styles.video} autoPlay muted loop />

          <div className={styles.weather_wrapper}>
            <div className={styles.label}>TODAY'S WEATHER</div>
            <div className={styles.perceived}>체감 31.4°</div>
            <img src={weather} alt="" className={styles.icon} />
            <div className={styles.temperature}>30.8°</div>
            <div className={styles.description}>구름 조금</div>
          </div>
        </div>
      </div>
      <Full disabled={false} onClick={toggleFullPage} />
    </div>
  );
};

export default PromotionA;
