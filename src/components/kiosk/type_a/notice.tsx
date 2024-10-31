import React, { useState } from 'react';
import styles from './notice.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { NOTICE } from '../../../constants/kiosk.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../../../style/kiosk_swiper_a.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
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
      <div style={{ paddingLeft: '6.25rem' }}>
        <div className={styles.header_en_x}>LIBRARY NOTICE</div>
        <div className={styles.header_kr_x}>공지사항</div>
        <Swiper
          loop
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={50}
          pagination={pagination}
          modules={[Pagination]}
          className={styles.swiper_x}
        >
          {NOTICE.map((item, index) => (
            <SwiperSlide
              key={item.id}
              style={{ width: '18.75rem !important', height: '26.52344rem' }}
            >
              <img src={item.img} alt="" className={styles.swiper_slide_x} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index: number) => setSelectedIndex(index);

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.26356rem; height: 0.26356rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return (
    <div className={styles.container_y}>
      <div className={styles.header_en_y}>LIBRARY NOTICE</div>
      <div className={styles.header_kr_y}>공지사항</div>
      <img className={styles.selected_item_y} src={NOTICE[selectedIndex].img} alt="" />
      <Swiper
        loop
        slidesPerView={5}
        slidesPerGroup={5}
        spaceBetween={26}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper_y}
      >
        {NOTICE.map((item, index) => (
          <SwiperSlide key={item.id} style={{ width: '2.7rem !important', height: '4rem' }}>
            <img
              src={item.img}
              alt=""
              className={`${selectedIndex === index ? styles.active : ''} ${styles.swiper_slide_y}`}
              onClick={() => handleItemClick(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const NoticeA = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    toggleLandscape();
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

export default NoticeA;
