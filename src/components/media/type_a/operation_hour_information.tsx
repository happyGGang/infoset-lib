import React from 'react';
import Title from '../../title';
import styles from './operation_hour_information.module.css';

interface Props {
  isFullScreen: boolean;
}

const HoursInformation: React.FC<Props> = ({ isFullScreen }) => {
  return (
    <div>
      <Title title={'이용시간안내'} />
      <div className={styles.container}></div>
    </div>
  );
};

export default HoursInformation;
