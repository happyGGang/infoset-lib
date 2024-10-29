import React from 'react';
import styles from './return_date.module.css';
import Full from '../../full_screen';

const ReturnBookB: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} />
      <Full disabled={false} onClick={() => console.log(123)} />
    </div>
  );
};

export default ReturnBookB;
