import React, { useState } from 'react';
import styles from './information.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import arrow from '../../../assets/img/smart/type_a/slide_arrow.svg';
import dummy from '../../../assets/img/smart/type_a/book_1.svg';
import award from '../../../assets/img/smart/type_a/award.svg';
import close from '../../../assets/img/kiosk/type_a/close.svg';
import { BOOK_Y } from '../../../constants/smart.constants';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const ITEMS_PER_PAGE = 5;

const HorizontalMode: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [selectedImage, setSelectedImage] = useState(dummy);
  const [isOpen, setIsOpen] = useState(false);
  const totalPages = Math.ceil(BOOK_Y.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
      setFadeClass('fade-in');
    }, 500);
  };

  const handlePrev = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
      setFadeClass('fade-in');
    }, 500);
  };

  const currentItems = BOOK_Y.slice(
    pageIndex * ITEMS_PER_PAGE,
    pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleItemClick = (img: string) => {
    setSelectedImage(img);
  };

  return isOpen ? (
    <div className={styles.popup_x}>
      <div className={styles.close_wrapper_x} onClick={() => setIsOpen(false)}>
        <img src={close} alt="" className={styles.close_x} />
        <div>닫기</div>
      </div>
    </div>
  ) : (
    <div className={styles.container_x}>
      <div className={styles.selected_book_wrapper_x}>
        <img src={selectedImage} alt="" />
        <div>
          대출
          <br />
          가능
        </div>
      </div>

      <div>
        <div className={styles.popup_open_x} onClick={() => setIsOpen(true)}>
          소장도서 서가위치보기
        </div>
        <div className={styles.slide_x}>
          <img src={arrow} className={styles.prev_x} alt="Previous" onClick={handlePrev} />
          <div className={`${styles.item_x} ${styles[fadeClass]}`}>
            {currentItems.map((item) => (
              <div
                key={item.id}
                className={styles.item_wrapper_x}
                onClick={() => handleItemClick(item.img)}
              >
                <img src={item.img} alt="" className={styles.item_img_x} />
                <div className={styles.item_title_x}>{item.title}</div>
                <div className={styles.item_award_x}>{item.id}위</div>
              </div>
            ))}
          </div>
          <img src={arrow} className={styles.next_x} alt="Next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [selectedImage, setSelectedImage] = useState(dummy);
  const [isOpen, setIsOpen] = useState(false);
  const totalPages = Math.ceil(BOOK_Y.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setPageIndex((prev) => (prev + 1) % totalPages);
      setFadeClass('fade-in');
    }, 500);
  };

  const handlePrev = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
      setFadeClass('fade-in');
    }, 500);
  };

  const currentItems = BOOK_Y.slice(
    pageIndex * ITEMS_PER_PAGE,
    pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const handleItemClick = (img: string) => {
    setSelectedImage(img);
  };

  return isOpen ? (
    <div className={styles.popup_y}>
      <div className={styles.close_wrapper_y} onClick={() => setIsOpen(false)}>
        <img src={close} alt="" className={styles.close_y} />
        <div>닫기</div>
      </div>
    </div>
  ) : (
    <div className={styles.container_y}>
      <div className={styles.selected_book_wrapper_y}>
        <img src={selectedImage} alt="" />
        <div>
          대출
          <br />
          가능
        </div>
      </div>

      <div className={styles.popup_open_y} onClick={() => setIsOpen(true)}>
        소장도서 서가위치보기
      </div>

      <div className={styles.list_title_y}>
        <img src={award} alt="" />
        <div>지금 우리 도서관 인기 대출 도서</div>
      </div>

      <div className={styles.slide_y}>
        <img src={arrow} className={styles.prev_y} alt="Previous" onClick={handlePrev} />
        <div className={`${styles.item_y} ${styles[fadeClass]}`}>
          {currentItems.map((item) => (
            <div
              key={item.id}
              className={styles.item_wrapper_y}
              onClick={() => handleItemClick(item.img)}
            >
              <img src={item.img} alt="" className={styles.item_img_y} />
              <div className={styles.item_title_y}>{item.title}</div>
              <div className={styles.item_award_y}>{item.id}위</div>
            </div>
          ))}
        </div>
        <img src={arrow} className={styles.next_y} alt="Next" onClick={handleNext} />
      </div>
    </div>
  );
};

const InformationA: React.FC = () => {
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

export default InformationA;
