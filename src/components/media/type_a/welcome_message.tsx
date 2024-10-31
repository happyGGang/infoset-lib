import styles from './welcome_message.module.css';
import React, { useEffect, useState } from 'react';
import { getCurrentDate, getCurrentTime } from '../../../util/date_time';
import Full from '../../full_screen';
import { useFullPageStore } from '../../../store/full_page.store';

const WelcomeMessageA: React.FC = () => {
  const { toggleFullPage } = useFullPageStore();
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>환영메세지</div>
          <div className={styles.header_title_en}>WELCOME</div>
        </div>
        <div className={styles.time}>{currentTime}</div>
        <div className={styles.date}>{currentDate}</div>
        <div className={styles.title}>INFOSET LIBRARY</div>
        <div className={styles.message}>인포셋도서관에 오신 것을 환영합니다.</div>
        <div className={styles.ticker}>
          <div className={styles.ticker_message}>
            도서관초대석 (불편한편의점) 일정이 김호연 작가의 개인사정으로 인해 변경되었습니다.
            이용에 참고하여 주시기 바랍니다. 여기는 텍스트 흘러가는 티커영역 입니다. 긴급 공지용으로
            사용해주세요!
          </div>
        </div>
      </div>
      <Full disabled={false} onClick={toggleFullPage} />
    </div>
  );
};

export default WelcomeMessageA;
