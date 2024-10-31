import React from 'react';
import styles from './return_date.module.css';
import Full from '../../full_screen';
import { useFullPageStore } from '../../../store/full_page.store';

const ReturnBookA: React.FC = () => {
  const { toggleFullPage } = useFullPageStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} />
      <Full disabled={false} onClick={toggleFullPage} />
    </div>
  );
};

export default ReturnBookA;
