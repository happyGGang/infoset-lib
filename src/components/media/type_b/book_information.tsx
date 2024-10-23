import React from 'react';
import Title from '../../title';
import styles from './book_information.module.css';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookInformation: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
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

export default BookInformation;
