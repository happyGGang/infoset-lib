import React, { useState } from 'react';
import styles from './new_book.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Pagination } from 'swiper/modules';
import { NEW_BOOK_A, NEW_BOOK_B } from '../../../constants/kiosk.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useFullPageStore } from '../../../store/full_page.store';

const HorizontalMode: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.46875rem; height: 0.46875rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return (
    <div className={styles.container_x}>
      <Swiper
        loop
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper_x}
      >
        {NEW_BOOK_B.map((item, index) => (
          <SwiperSlide
            key={item.id}
            style={{ width: '59.76563rem !important', height: '28.63675rem' }}
          >
            <img src={item.img} alt="" className={styles.img_x} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.26356rem; height: 0.26356rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return (
    <div className={styles.container_y}>
      <Swiper
        loop
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper_y}
      >
        {NEW_BOOK_A.map((item, index) => (
          <SwiperSlide
            key={item.id}
            style={{ width: '18.88975rem !important', height: '31.38775rem' }}
          >
            <img src={item.img} alt="" className={styles.img_y} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const NewBookB = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={false} onClick={toggleFullPage} />
      </div>
    </>
  );
};

export default NewBookB;
