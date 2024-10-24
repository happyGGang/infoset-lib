import React, { useEffect, useState } from 'react';
import Title from '../../title';
import styles from './book_information.module.css';
import line from '../../../assets/img/line.svg';
import dummy from '../../../assets/img/media/type_a/new_book_0.svg';
import { BESTSELLER, NEW_BOOK } from '../../../constants/media.constants';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookInformationA: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const [currentIndexes, setCurrentIndexes] = useState([0, 0]); // [newBookIndex, bestsellerIndex]
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndexes((prevIndexes) =>
          prevIndexes.map((index) => (index + 1) % NEW_BOOK.length)
        );
        setIsFading(false);
      }, 800);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getNextBooks = (books: any[], currentIndex: number) =>
    Array.from({ length: 3 }, (_, i) => books[(currentIndex + i + 1) % books.length]);

  const currentBook = NEW_BOOK[currentIndexes[0]];
  const currentBestseller = BESTSELLER[currentIndexes[1]];
  const nextBooks = getNextBooks(NEW_BOOK, currentIndexes[0]);
  const nextBestsellers = getNextBooks(BESTSELLER, currentIndexes[1]);

  const handleZoomClick = () => setIsFullScreen(false);

  return (
    <div>
      <Title title={'도서정보'} />
      <div className={`${styles.container} ${isFullScreen ? styles.fullscreen : ''}`}>
        {isFullScreen && <div className={styles.zoom} onClick={handleZoomClick}></div>}
        <div className={`${isFullScreen ? styles.f_header : styles.header}`}>
          <div className={`${isFullScreen ? styles.f_header_title_kr : styles.header_title_kr}`}>
            도서정보
          </div>
          <div className={`${isFullScreen ? styles.f_header_title_en : styles.header_title_en}`}>
            BOOK INFORMATION
          </div>
        </div>

        <div className={`${isFullScreen ? styles.f_new_book_wrapper : styles.new_book_wrapper}`}>
          <div className={`${isFullScreen ? styles.f_label : styles.label}`}>
            <div>
              신착
              <br />
              도서
            </div>
            <img src={line} alt="" />
          </div>

          <div
            className={`${isFullScreen ? styles.f_current : styles.current} ${isFading ? styles['fade-out'] : styles['fade-in']}`}
          >
            <img src={currentBook.thumbnail} alt={currentBook.title} />
            <div>
              <div className={`${isFullScreen ? styles.f_book_title : styles.book_title}`}>
                {currentBook.title}
              </div>
              <div className={`${isFullScreen ? styles.f_book_info : styles.book_info}`}>
                {currentBook.info}
              </div>
              <div className={`${isFullScreen ? styles.f_book_summary : styles.book_summary}`}>
                {currentBook.summary}
              </div>
            </div>
          </div>

          <div
            className={`${isFullScreen ? styles.f_list_wrapper : styles.list_wrapper} ${isFading ? styles['fade-out'] : styles['fade-in']}`}
          >
            {nextBooks.map((book) => (
              <div key={book.id} className={`${isFullScreen ? styles.f_list : styles.list}`}>
                <img src={book.thumbnail || dummy} alt={book.title} />
                <div>{book.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${isFullScreen ? styles.f_bestseller_wrapper : styles.bestseller_wrapper}`}
        >
          <div className={`${isFullScreen ? styles.f_label : styles.label}`}>
            <div>
              인기
              <br />
              도서
            </div>
            <img src={line} alt="" />
          </div>

          <div
            className={`${isFullScreen ? styles.f_current : styles.current} ${isFading ? styles['fade-out'] : styles['fade-in']}`}
          >
            <img src={currentBestseller.thumbnail} alt={currentBestseller.title} />
            <div>
              <div className={`${isFullScreen ? styles.f_book_title : styles.book_title}`}>
                {currentBestseller.title}
              </div>
              <div className={`${isFullScreen ? styles.f_book_info : styles.book_info}`}>
                {currentBestseller.info}
              </div>
              <div className={`${isFullScreen ? styles.f_book_summary : styles.book_summary}`}>
                {currentBestseller.summary}
              </div>
            </div>
          </div>

          <div
            className={`${isFullScreen ? styles.f_list_wrapper : styles.list_wrapper} ${isFading ? styles['fade-out'] : styles['fade-in']}`}
          >
            {nextBestsellers.map((book) => (
              <div key={book.id} className={`${isFullScreen ? styles.f_list : styles.list}`}>
                <img src={book.thumbnail || dummy} alt={book.title} />
                <div>{book.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInformationA;
