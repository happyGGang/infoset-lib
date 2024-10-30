import React, { useState } from 'react';
import styles from './custom.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Pagination } from 'swiper/modules';
import { CUSTOM_Y } from '../../../constants/smart.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const HorizontalMode: React.FC = () => {
  return <div className={styles.container_x}></div>;
};

const VerticalMode: React.FC = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.26356rem; height: 0.26356rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return <div className={styles.container_y}>
    <Swiper
      loop
      slidesPerView={1}
      slidesPerGroup={1}
      pagination={pagination}
      modules={[Pagination]}
      className={styles.lib_swiper_y}
    >
      {CUSTOM_Y.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{ width: '19.09867rem !important', height: '25.52688rem' }}
        >
          <img src={item.img} alt="" className={styles.lib_img_y} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>;

};

const CustomB: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const [full, setFull] = useState(false);

  const handleClick = () => setHorizontalMode((prev) => !prev);

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={!horizontalMode} onClick={() => console.log(123)} />
      </div>
    </>
  );
};

export default CustomB;
