import React, { useState } from 'react';
import styles from './custom.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Pagination } from 'swiper/modules';
import { BIGDATA_X_B, CUSTOM_Y, LIB_Y } from '../../../constants/smart.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

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
        className={styles.lib_swiper_x}
      >
        {BIGDATA_X_B.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ width: '62.08513rem !important', height: '15.83988rem' }}
          >
            <img src={item.img} alt="" className={styles.lib_img_x} />
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
        className={styles.lib_swiper_y}
      >
        {LIB_Y.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ width: '19.09867rem !important', height: '25.52688rem' }}
          >
            <img src={item.img} alt="" className={styles.lib_img_y} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const CustomB: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    horizontalMode ? toggleLandscape(true) : toggleLandscape(false);
  }

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={false} onClick={handleFullPage} />
      </div>
    </>
  );
};

export default CustomB;
