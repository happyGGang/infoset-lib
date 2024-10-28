import React from 'react';
import tilt from '../../assets/img/tilt.svg';
import styles from './index.module.css';

const Tilt = () => {
  return <img src={tilt} alt={'tilt'} className={styles.tilt} />;
};

export default Tilt;
