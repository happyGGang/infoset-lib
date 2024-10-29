import React from 'react';
import styles from './operation_hour_information.module.css';
import Full from '../../full_screen';

const HoursInformationA: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} />
      <Full disabled={false} onClick={() => console.log(123)} />
    </div>
  );
};

export default HoursInformationA;
