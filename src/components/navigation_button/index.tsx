import React from 'react';
import styles from './index.module.css';

interface NavigationProps {
  selectedId: number;
  totalLength: number;
  children: React.ReactNode;
  onSelect: (id: number) => void;
}

const NavigationButton: React.FC<NavigationProps> = ({
  onSelect,
  children,
  selectedId,
  totalLength,
}) => {
  const handlePrev = () => onSelect(selectedId > 0 ? selectedId - 1 : totalLength - 1);

  const handleNext = () => onSelect(selectedId < totalLength - 1 ? selectedId + 1 : 0);

  return (
    <div className={styles.wrapper}>
      <div onClick={handlePrev} className={styles.prev}></div>
      {children}
      <div onClick={handleNext} className={styles.next}></div>
    </div>
  );
};

export default NavigationButton;
