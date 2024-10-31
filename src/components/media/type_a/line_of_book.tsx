import styles from './line_of_book.module.css';
import React from 'react';
import Full from '../../full_screen';
import { useFullPageStore } from '../../../store/full_page.store';

const LineOfBookA: React.FC = () => {
  const { toggleFullPage } = useFullPageStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>책속한줄</div>
          <div className={styles.header_title_en}>A LINE OF BOOK</div>
        </div>
        <div className={styles.line_of_book}>
          그림 안의 시간은 한순간에 얼어붙었다기보다 <br />
          흘러들어 고인 느낌이다.
        </div>
        <div className={styles.caption}>'나는 메트로폴리탄 미술관의 경비원입니다' 중에서</div>
      </div>
      <Full disabled={false} onClick={toggleFullPage} />
    </div>
  );
};

export default LineOfBookA;
