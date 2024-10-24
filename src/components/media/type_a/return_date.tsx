import React from 'react';
import Title from '../../title';
import styles from './return_date.module.css';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReturnBookA: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const handleZoomClick = () => setIsFullScreen(false);

  return (
    <div>
      <Title title={'대출반납일'} />
      <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
        {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
      </div>
    </div>
  );
};

export default ReturnBookA;
