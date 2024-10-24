import Title from '../../title';
import styles from './line_of_book.module.css';
import React from 'react';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LineOfBookB: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const handleZoomClick = () => setIsFullScreen(false);

  return (
    <div>
      <Title title={'책속한줄'} />
      <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
        {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
        <div className={isFullScreen ? styles.f_header : styles.header}>
          <div className={isFullScreen ? styles.f_header_title_kr : styles.header_title_kr}>
            책속한줄
          </div>
          <div className={isFullScreen ? styles.f_header_title_en : styles.header_title_en}>
            A LINE OF BOOK
          </div>
        </div>
        <div className={isFullScreen ? styles.f_title : styles.title}>책 속의 한줄 발견</div>
        <div className={isFullScreen ? styles.f_line_of_book : styles.line_of_book}>
          그림 안의 시간은 한순간에 얼어붙었다기보다 <br />
          흘러들어 고인 느낌이다.
        </div>
        <div className={isFullScreen ? styles.f_caption : styles.caption}>
          '나는 메트로폴리탄 미술관의 경비원입니다' 중에서
        </div>
      </div>
    </div>
  );
};

export default LineOfBookB;
