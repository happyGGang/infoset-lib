import styles from './welcome_message.module.css';
import React, { useEffect, useState } from 'react';
import { getCurrentDate, getCurrentTime } from '../../../util/date_time';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WelcomeMessageB: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleZoomClick = () => setIsFullScreen(false);

  return (
    <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
      {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
      <div className={isFullScreen ? styles.f_header : styles.header}>
        <div className={isFullScreen ? styles.f_header_title_kr : styles.header_title_kr}>
          환영메세지
        </div>
        <div className={isFullScreen ? styles.f_header_title_en : styles.header_title_en}>
          WELCOME
        </div>
      </div>
      <div className={isFullScreen ? styles.f_time : styles.time}>{currentTime}</div>
      <div className={isFullScreen ? styles.f_date : styles.date}>{currentDate}</div>
      <div className={isFullScreen ? styles.f_message : styles.message}>
        인포셋도서관에 오신 것을 환영합니다.
      </div>
      <div className={isFullScreen ? styles.f_title : styles.title}>Welcome to Infoset Library</div>
      <div className={isFullScreen ? styles.f_ticker : styles.ticker}>
        <div className={isFullScreen ? styles.f_ticker_message : styles.ticker_message}>
          도서관초대석 (불편한편의점) 일정이 김호연 작가의 개인사정으로 인해 변경되었습니다. 이용에
          참고하여 주시기 바랍니다. 여기는 텍스트 흘러가는 티커영역 입니다. 긴급 공지용으로
          사용해주세요!
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessageB;
