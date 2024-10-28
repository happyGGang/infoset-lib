import React, { useState, useEffect } from 'react';
import styles from './facility.module.css';
import grayLine from '../../../assets/img/kiosk/type_a/gray_line.svg';
import yellowLine from '../../../assets/img/kiosk/type_a/yellow_line.svg';
import map_1 from '../../../assets/img/kiosk/type_a/map_1F.png';
import map_2 from '../../../assets/img/kiosk/type_a/map_2F.svg';
import map_3 from '../../../assets/img/kiosk/type_a/map_3F.svg';
import { Pagination } from 'swiper/modules';
import { FACILITY_A, FACILITY_B, NOTICE } from '../../../constants/kiosk.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Tilt from '../../tilt';
import Full from '../../full_screen';

const HorizontalMode: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [animate, setAnimate] = useState(false);

  const mapImages: { [key: number]: string } = { 1: map_1, 2: map_2, 3: map_3 };

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.46875rem; height: 0.46875rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedFloor]);

  return (
    <div className={styles.container_x}>
      <div className={styles.left}>
        <div className={styles.map_container_x}>
          <img className={styles.map_x} src={mapImages[selectedFloor]} alt={`${selectedFloor}F`} />
          <div className={`${styles.selected_floor_x} ${animate ? styles.animate : ''}`}>
            {selectedFloor}F
          </div>
        </div>

        <div className={styles.floor_list_x}>
          {Array.from({ length: 3 }, (_, index) => {
            const floorNumber = index + 1;
            const isActive = selectedFloor === floorNumber;
            const lineImage = isActive ? yellowLine : grayLine;
            const activeClass = isActive ? styles.active : '';

            return (
              <div
                key={floorNumber}
                onClick={() => setSelectedFloor(floorNumber)}
                className={`${styles.floor_btn_x} ${activeClass}`}
              >
                <div>{floorNumber}F</div>
                <img src={lineImage} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <Swiper
        loop
        direction={'vertical'}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper_x}
      >
        {FACILITY_B.map((item, index) => (
          <SwiperSlide
            key={item.id}
            style={{ width: 'width: 21.67969rem;', height: '30.46938rem' }}
          >
            <img src={item.img} alt="" className={styles.swiper_slide_x} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [animate, setAnimate] = useState(false);

  const mapImages: { [key: number]: string } = { 1: map_1, 2: map_2, 3: map_3 };

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.26356rem; height: 0.26356rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  useEffect(() => {
    setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [selectedFloor]);

  return (
    <div className={styles.container_y}>
      <div className={styles.map_container_y}>
        <img className={styles.map_y} src={mapImages[selectedFloor]} alt={`${selectedFloor}F`} />
        <div className={`${styles.selected_floor_y} ${animate ? styles.animate : ''}`}>
          {selectedFloor}F
        </div>
      </div>

      <Swiper
        loop
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={pagination}
        modules={[Pagination]}
        className={styles.swiper_y}
      >
        {FACILITY_A.map((item, index) => (
          <SwiperSlide
            key={item.id}
            style={{ width: '19.76838rem !important', height: '12.08177rem' }}
          >
            <img src={item.img} alt="" className={styles.swiper_slide_y} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.floor_list_y}>
        {Array.from({ length: 3 }, (_, index) => {
          const floorNumber = index + 1;
          const isActive = selectedFloor === floorNumber;
          const lineImage = isActive ? yellowLine : grayLine;
          const activeClass = isActive ? styles.active : '';

          return (
            <div
              key={floorNumber}
              onClick={() => setSelectedFloor(floorNumber)}
              className={`${styles.floor_btn_y} ${activeClass}`}
            >
              <div>{floorNumber}F</div>
              <img src={lineImage} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FacilityA = () => {
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

export default FacilityA;
