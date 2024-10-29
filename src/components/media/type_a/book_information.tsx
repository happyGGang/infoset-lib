import React, { useEffect, useState } from 'react';
import styles from './book_information.module.css';
import line from '../../../assets/img/line.svg';
import dummy from '../../../assets/img/media/type_a/new_book_0.svg';
import { BESTSELLER, NEW_BOOK } from '../../../constants/media.constants';
import Zoom from '../../zoom';
import Full from '../../full_screen';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookInformationA: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  const [currentIndexes, setCurrentIndexes] = useState([0, 0]);
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

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.header_title_kr}>도서정보</div>
          <div className={styles.header_title_en}>BOOK INFORMATION</div>
        </div>

        <div className={styles.new_book_wrapper}>
          <div className={styles.label}>
            <div>
              신착
              <br />
              도서
            </div>
            <img src={line} alt="" />
          </div>

          <div className={`${styles.current} ${isFading ? styles['fade-out'] : styles['fade-in']}`}>
            <img src={currentBook.thumbnail} alt={currentBook.title} />
            <div>
              <div className={styles.book_title}>{currentBook.title}</div>
              <div className={styles.book_info}>{currentBook.info}</div>
              <div className={styles.book_summary}>{currentBook.summary}</div>
            </div>
          </div>

          <div
            className={`${styles.list_wrapper} ${isFading ? styles['fade-out'] : styles['fade-in']}`}
          >
            {nextBooks.map((book) => (
              <div key={book.id} className={styles.list}>
                <img src={book.thumbnail || dummy} alt={book.title} />
                <div>{book.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bestseller_wrapper}>
          <div className={styles.label}>
            <div>
              인기
              <br />
              도서
            </div>
            <img src={line} alt="" />
          </div>
          <div className={`${styles.current} ${isFading ? styles['fade-out'] : styles['fade-in']}`}>
            <img src={currentBestseller.thumbnail} alt={currentBestseller.title} />
            <div>
              <div className={styles.book_title}>{currentBestseller.title}</div>
              <div className={styles.book_info}>{currentBestseller.info}</div>
              <div className={styles.book_summary}>{currentBestseller.summary}</div>
            </div>
          </div>
          <div
            className={`${styles.list_wrapper} ${isFading ? styles['fade-out'] : styles['fade-in']}`}
          >
            {nextBestsellers.map((book) => (
              <div key={book.id} className={styles.list}>
                <img src={book.thumbnail || dummy} alt={book.title} />
                <div>{book.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Full disabled={false} onClick={() => console.log(123)} />
    </div>
  );
};

export default BookInformationA;
