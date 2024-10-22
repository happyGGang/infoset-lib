import React from 'react';
import Title from '../../title';
import styles from './return_date.module.css';

const ReturnBook: React.FC = () => {
  return (
    <>
      <Title title={'대출반납일'} />
      <div className={styles.container}></div>
    </>
  );
};

export default ReturnBook;
