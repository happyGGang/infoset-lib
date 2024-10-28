import React from 'react';
import tilt from '../../assets/img/tilt.svg';
import styles from './index.module.css';

interface TiltProps {
  onClick: () => void;
}

const Tilt: React.FC<TiltProps> = ({ onClick }) => {
  return <img src={tilt} alt={'tilt'} className={styles.tilt} onClick={onClick} />;
};

export default Tilt;
