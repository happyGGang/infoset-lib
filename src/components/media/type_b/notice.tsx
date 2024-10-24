import React, { useEffect, useState } from 'react';
import styles from './notice.module.css';
import { NOTICE } from '../../../constants/media.constants';
import Zoom from '../../zoom';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NoticeB: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = NOTICE.length;
  const [fade, setFade] = useState(false);

  const getNextIndex = (index: number) => {
    return (index + itemsPerPage) % totalItems;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
        setFade(false);
      }, 1000);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const displayedItems = NOTICE.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className={styles.container}>
      <Zoom isFullScreen={isFullScreen} onClick={() => setIsFullScreen(false)} />
      <div className={styles.header}>
        <div className={styles.header_title_kr}>공지사항</div>
        <div className={styles.header_title_en}>NOTICE</div>
      </div>
      <div className={`${styles.slide} ${fade ? styles.fadeOut : styles.fadeIn}`}>
        {displayedItems.map(({ id, image, title }) => (
          <div className={styles.wrapper} key={id}>
            <img src={image} alt={title} className={styles.img} />
            <div className={styles.text_wrapper}>
              <div className={styles.index}>{id}</div>
              <div className={styles.title}>{title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeB;
