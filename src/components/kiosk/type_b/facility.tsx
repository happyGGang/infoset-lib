import React, { useState, useEffect } from 'react';
import styles from './facility.module.css';
import map_1 from '../../../assets/img/kiosk/type_a/map_1F.png';
import map_2 from '../../../assets/img/kiosk/type_a/map_2F.svg';
import map_3 from '../../../assets/img/kiosk/type_a/map_3F.svg';
import { Pagination } from 'swiper/modules';
import { FACILITY_X, FACILITY_Y } from '../../../constants/kiosk.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import popup_content_y from '../../../assets/img/kiosk/type_a/facility_popup_content_y.svg';
import close from '../../../assets/img/kiosk/type_a/close.svg';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const HorizontalMode: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {isOpen ? (
        <div className={styles.popup_x}>
          <div onClick={() => setIsOpen(false)} className={styles.close_x}>
            <img src={close} alt="" />
            <div>닫기</div>
          </div>
        </div>
      ) : (
        <div className={styles.container_x}>
          <div className={styles.left}>
            <div className={styles.map_container_x}>
              <img
                className={styles.map_x}
                src={mapImages[selectedFloor]}
                alt={`${selectedFloor}F`}
              />
              <div className={`${styles.selected_floor_x} ${animate ? styles.animate : ''}`}>
                {selectedFloor}F
              </div>
            </div>
          </div>
          <div>
            <div className={styles.floor_list_x}>
              {Array.from({ length: 3 }, (_, index) => {
                const floorNumber = index + 1;
                const isActive = selectedFloor === floorNumber;
                const activeClass = isActive ? styles.active_x : '';

                return (
                  <div
                    key={floorNumber}
                    onClick={() => setSelectedFloor(floorNumber)}
                    className={`${styles.floor_btn_x} ${activeClass}`}
                  >
                    <div>{floorNumber}F</div>
                  </div>
                );
              })}
            </div>
            <Swiper
              loop
              slidesPerView={1}
              slidesPerGroup={1}
              pagination={pagination}
              modules={[Pagination]}
              className={styles.swiper_x}
            >
              {FACILITY_X.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: 'width: 19.53125rem;', height: '25.85938rem' }}
                >
                  <img
                    src={item.img}
                    alt=""
                    className={styles.swiper_slide_x}
                    onClick={() => setIsOpen(true)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

const VerticalMode: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState(2);
  const [animate, setAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      {isOpen ? (
        <div className={styles.popup_y}>
          <img src={popup_content_y} alt="" className={styles.popup_content_y} />
          <div onClick={() => setIsOpen(false)} className={styles.close_y}>
            <img src={close} alt="" />
            <div>닫기</div>
          </div>
        </div>
      ) : (
        <div className={styles.container_y}>
          <div className={styles.map_container_y}>
            <img
              className={styles.map_y}
              src={mapImages[selectedFloor]}
              alt={`${selectedFloor}F`}
            />
            <div className={`${styles.selected_floor_y} ${animate ? styles.animate : ''}`}>
              {selectedFloor}F
            </div>
          </div>

          <div className={styles.floor_list_y}>
            {Array.from({ length: 3 }, (_, index) => {
              const floorNumber = index + 1;
              const isActive = selectedFloor === floorNumber;
              const activeClass = isActive ? styles.active : '';

              return (
                <div
                  key={floorNumber}
                  onClick={() => setSelectedFloor(floorNumber)}
                  className={`${styles.floor_btn_y} ${activeClass}`}
                >
                  <div>{floorNumber}F</div>
                </div>
              );
            })}
          </div>

          <Swiper
            loop
            slidesPerView={1}
            slidesPerGroup={1}
            pagination={pagination}
            modules={[Pagination]}
            className={styles.swiper_y}
          >
            {FACILITY_Y.map((item, index) => (
              <SwiperSlide
                key={item.id}
                style={{ width: '19.76838rem !important', height: '12.08177rem' }}
              >
                <img
                  src={item.img}
                  alt=""
                  className={styles.swiper_slide_y}
                  onClick={() => setIsOpen(true)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

const FacilityB = () => {
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

export default FacilityB;
