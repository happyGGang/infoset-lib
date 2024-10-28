import React from 'react';
import styles from './index.module.css';
import full from '../../assets/img/full.svg';
import disable_full from '../../assets/img/disable_full.svg';

interface FullProps {
  disabled: boolean;
  onClick: () => void;
}

const Full: React.FC<FullProps> = ({ disabled, onClick }) => {
  return (
    <>
      {disabled ? (
        <img src={disable_full} alt={'full'} className={styles.full} />
      ) : (
        <img src={full} alt={'full'} className={styles.full} onClick={onClick} />
      )}
    </>
  );
};

export default Full;
