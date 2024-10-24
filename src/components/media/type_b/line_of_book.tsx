import styles from './line_of_book.module.css';
import React from 'react';
import Zoom from '../../zoom';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LineOfBookB: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  return (
    <div className={styles.container}>
      <Zoom isFullScreen={isFullScreen} onClick={() => setIsFullScreen(false)} />
      <div className={styles.header}>
        <div className={styles.header_title_kr}>책속한줄</div>
        <div className={styles.header_title_en}>A LINE OF BOOK</div>
      </div>
      <div className={styles.title}>책 속의 한줄 발견</div>
      <div className={styles.line_of_book}>
        그림 안의 시간은 한순간에 얼어붙었다기보다 <br />
        흘러들어 고인 느낌이다.
      </div>
      <div className={styles.caption}>'나는 메트로폴리탄 미술관의 경비원입니다' 중에서</div>
    </div>
  );
};

export default LineOfBookB;
