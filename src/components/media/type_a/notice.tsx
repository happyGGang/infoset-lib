import React, { useEffect, useState } from 'react';
import Title from '../../title';
import styles from './notice.module.css';
import { NOTICE } from '../../../constants/media.constants';

interface Props {
  isFullScreen: boolean;
}

const Notice: React.FC<Props> = ({ isFullScreen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
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
    <div>
      <Title title={'공지사항'} />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>공지사항</div>
          <div className={styles.header_title_en}>NOTICE</div>
        </div>
        <div className={`${styles.slide} ${fade ? styles.fadeOut : styles.fadeIn}`}>
          {displayedItems.map(({ id, image, title }) => (
            <div className={styles.wrapper} key={id}>
              <img src={image} alt={title} className={styles.img} />
              <div className={styles.title}>{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;
