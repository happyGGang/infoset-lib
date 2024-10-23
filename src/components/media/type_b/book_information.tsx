import React from 'react';
import Title from '../../title';
import styles from './book_information.module.css';

const BookInformation: React.FC = () => {
  return (
    <div>
      <Title title={'대출반납일'} />
      <div className={styles.container}></div>
    </div>
  );
};

export default BookInformation;
