import React, { useEffect, useState } from 'react';
import Title from '../../title';
import styles from './notice.module.css';
import { NOTICE } from '../../../constants/media.constants';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notice: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
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

  const handleZoomClick = () => setIsFullScreen(false);

  return (
    <div>
      <Title title={'공지사항'} />
      <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
        {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
        <div className={isFullScreen ? styles.f_header : styles.header}>
          <div className={isFullScreen ? styles.f_header_title_kr : styles.header_title_kr}>
            공지사항
          </div>
          <div className={isFullScreen ? styles.f_header_title_en : styles.header_title_en}>
            NOTICE
          </div>
        </div>
        <div
          className={`${isFullScreen ? styles.f_slide : styles.slide} ${fade ? styles.fadeOut : styles.fadeIn}`}
        >
          {displayedItems.map(({ id, image, title }) => (
            <div className={isFullScreen ? styles.f_wrapper : styles.wrapper} key={id}>
              <img src={image} alt={title} className={isFullScreen ? styles.f_img : styles.img} />
              <div className={isFullScreen ? styles.f_text_wrapper : styles.text_wrapper}>
                <div className={isFullScreen ? styles.f_index : styles.index}>{id}</div>
                <div className={isFullScreen ? styles.f_title : styles.title}>{title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;
