import React from 'react';
import styles from './book_information.module.css';
import Full from '../../full_screen';

const BookInformationB: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} />
      <Full disabled={false} onClick={() => console.log(123)} />
    </div>
  );
};

export default BookInformationB;
