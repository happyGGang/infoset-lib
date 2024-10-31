import React, { useEffect, useState } from 'react';
import { getCurrentDate, getCurrentTime } from '../../../util/date_time';
import styles from './welcome_message.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const HorizontalMode: React.FC = () => {
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
    <div className={styles.container_x}>
      <div className={styles.time_x}>{currentTime}</div>
      <div className={styles.date_x}>{currentDate}</div>
      <div className={styles.message_x}>welcome</div>
      <div className={styles.caption_x}>INFOSET LIBRARY</div>
      <div className={styles.arrow_x}></div>
    </div>
  );
};

const VerticalMode: React.FC = () => {
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
    <div className={styles.container_y}>
      <div className={styles.time_y}>{currentTime}</div>
      <div className={styles.date_y}>{currentDate}</div>
      <div className={styles.message_y}>welcome</div>
      <div className={styles.caption_y}>INFOSET LIBRARY</div>
      <div className={styles.arrow_y}></div>
    </div>
  );
};

const WelcomeMessageA: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    toggleLandscape();
  }

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={false} onClick={handleFullPage} />
      </div>
    </>
  );
};

export default WelcomeMessageA;
