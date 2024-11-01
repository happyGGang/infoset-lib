import React, { useState } from 'react';
import styles from './result.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import custom from '../../../assets/img/smart/type_a/custom_btn.svg';
import arrow from '../../../assets/img/smart/type_a/slide_arrow.svg';
import { RESULT_X, RESULT_Y } from '../../../constants/smart.constants';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const HorizontalMode: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const totalSlides = RESULT_Y.length;

  const handleNext = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
      setFadeClass('fade-in');
    }, 500);
  };

  const handlePrev = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      setFadeClass('fade-in');
    }, 500);
  };

  return (
    <div className={styles.container_x}>
      <div className={styles.slide_x}>
        <img src={arrow} className={styles.prev_x} alt="Previous" onClick={handlePrev} />
        <img
          className={`${styles.item_x} ${styles[fadeClass]}`}
          src={RESULT_X[currentIndex].img}
          alt={`Slide ${currentIndex + 1}`}
        />
        <img src={arrow} className={styles.next_x} alt="Next" onClick={handleNext} />
      </div>
      <div className={styles.pagination_x}>
        <span>{currentIndex + 1}</span> / {totalSlides}
      </div>
      <img src={custom} alt="Custom Button" className={styles.custom_btn_x} />
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const totalSlides = RESULT_Y.length;

  const handleNext = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
      setFadeClass('fade-in');
    }, 500);
  };

  const handlePrev = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      setFadeClass('fade-in');
    }, 500);
  };

  return (
    <div className={styles.container_y}>
      <div className={styles.slide_y}>
        <img src={arrow} className={styles.prev_y} alt="Previous" onClick={handlePrev} />
        <img
          className={`${styles.item_y} ${styles[fadeClass]}`}
          src={RESULT_Y[currentIndex].img}
          alt={`Slide ${currentIndex + 1}`}
        />
        <img src={arrow} className={styles.next_y} alt="Next" onClick={handleNext} />
      </div>
      <div className={styles.pagination_y}>
        <span>{currentIndex + 1}</span> / {totalSlides}
      </div>
      <img src={custom} alt="Custom Button" className={styles.custom_btn_y} />
    </div>
  );
};

const ResultA: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    horizontalMode ? toggleLandscape(true) : toggleLandscape(false);
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

export default ResultA;
