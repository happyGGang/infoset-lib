import React from 'react';
import styles from './index.module.css';
import full from '../../assets/img/full.svg';
import disable_full from '../../assets/img/disable_full.svg';

interface FullProps {
  disabled: boolean;
}

const Full: React.FC<FullProps> = ({ disabled }) => {
  return (
    <>
      {disabled ? (
        <img src={disable_full} alt={'full'} className={styles.full} />
      ) : (
        <img src={full} alt={'full'} className={styles.full} />
      )}
    </>
  );
};

export default Full;
