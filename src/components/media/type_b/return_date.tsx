import React from 'react';
import styles from './return_date.module.css';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReturnBookB: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const handleZoomClick = () => setIsFullScreen(false);

  return (
    <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
      {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
    </div>
  );
};

export default ReturnBookB;
