import styles from './line_of_book.module.css';
import React, { useEffect, useState } from 'react';
import Full from '../../full_screen';
import { useFullPageStore } from '../../../store/full_page.store';

const LineOfBookA: React.FC = () => {
  const { toggleFullPage } = useFullPageStore();

  const data = [
    {
      title: '그림 안의 시간은 한순간에 얼어붙었다기보다\n흘러들어 고인 느낌이다.',
      des: "'나는 메트로폴리탄 미술관의 경비원입니다' 중에서",
    },
    {
      title: '우리는 인생의 날들을 늘릴 수는 없지만, 그 날들에\n생기를 불어넣을 수는 있다.',
      des: "'당신의 완벽한 1년’ 중에서",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setAnimate(true);
      }, 50);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const renderAnimatedTitle = () => {
    return data[currentIndex].title.split(/(\s+)/).map((char, index) => (
      <span
        key={index}
        className={char.trim() ? (animate ? styles.animate_char : '') : ''}
        style={char.trim() ? { animationDelay: `${index * 0.1}s` } : {}}
      >
        {char}
      </span>
    ));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>책속한줄</div>
          <div className={styles.header_title_en}>A LINE OF BOOK</div>
        </div>
        <div className={`${styles.line_of_book}`}>{renderAnimatedTitle()}</div>
        <div className={`${styles.caption} ${animate ? styles.animate : ''}`}>
          {data[currentIndex].des}
        </div>
      </div>
      <Full disabled={false} onClick={toggleFullPage} />
    </div>
  );
};

export default LineOfBookA;
