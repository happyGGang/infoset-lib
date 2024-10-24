import React from 'react';
import Title from '../../title';
import styles from './operation_hour_information.module.css';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HoursInformationB: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const handleZoomClick = () => setIsFullScreen(false);

  return (
    <div>
      <Title title={'이용시간안내'} />
      <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
        {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
      </div>
    </div>
  );
};

export default HoursInformationB;
