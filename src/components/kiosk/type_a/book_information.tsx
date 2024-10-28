import React, { useState } from 'react';
import styles from './book_information.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Pagination } from 'swiper/modules';
import { BOOK_INFORMATION } from '../../../constants/kiosk.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import close from '../../../assets/img/kiosk/type_a/close.svg';

const HorizontalMode: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.46875rem; height: 0.46875rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

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
          <div className={styles.selected_book_x}>
            <img src={BOOK_INFORMATION[selectedItem].img} alt="" />
            <div className={styles.badge_x}>
              대출
              <br />
              가능
            </div>
          </div>
          <div>
            <div className={styles.btn_x} onClick={() => setIsOpen(true)}>
              소장도서 서가위치보기
            </div>
            <Swiper
              loop
              slidesPerView={6}
              slidesPerGroup={6}
              spaceBetween={12.5}
              pagination={pagination}
              modules={[Pagination]}
              className={styles.swiper_x}
            >
              {BOOK_INFORMATION.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: '4.6875rem !important', height: '8.71875rem' }}
                >
                  <div onClick={() => setSelectedItem(item.id)}>
                    <img src={item.img} alt="" className={styles.img_x} />
                    <div className={styles.title_x}>{item.title}</div>
                    <div className={styles.writer_x}>{item.writer}</div>
                  </div>
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
  const [selectedItem, setSelectedItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.26356rem; height: 0.26356rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return (
    <>
      {isOpen ? (
        <div className={styles.popup_y}>
          <div onClick={() => setIsOpen(false)} className={styles.close_y}>
            <img src={close} alt="" />
            <div>닫기</div>
          </div>
        </div>
      ) : (
        <div className={styles.container_y}>
          <div className={styles.selected_book_y}>
            <img src={BOOK_INFORMATION[selectedItem].img} alt="" />
            <div className={styles.badge_y}>
              대출
              <br />
              가능
            </div>
          </div>
          <div className={styles.btn_y} onClick={() => setIsOpen(true)}>
            소장도서 서가위치보기
          </div>
          <Swiper
            loop
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={12.5}
            pagination={pagination}
            modules={[Pagination]}
            className={styles.swiper_y}
          >
            {BOOK_INFORMATION.map((item, index) => (
              <SwiperSlide
                key={item.id}
                style={{ width: '2.63581rem !important', height: '4.87939rem' }}
              >
                <div onClick={() => setSelectedItem(item.id)}>
                  <img src={item.img} alt="" className={styles.img_y} />
                  <div className={styles.title_y}>{item.title}</div>
                  <div className={styles.writer_y}>{item.writer}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

const BookInformationA = () => {
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

export default BookInformationA;
