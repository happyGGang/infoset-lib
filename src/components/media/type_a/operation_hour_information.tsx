import React from 'react';
import Title from '../../title';
import styles from './operation_hour_information.module.css';

const HoursInformation: React.FC = () => {
  return (
    <>
      <Title title={'이용시간안내'} />
      <div className={styles.container}></div>
    </>
  );
};

export default HoursInformation;
