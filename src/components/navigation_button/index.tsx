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
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.prev}
        onClick={() => onSelect(selectedId > 0 ? selectedId - 1 : totalLength - 1)}
      />
      {children}
      <div
        className={styles.next}
        onClick={() => onSelect(selectedId < totalLength - 1 ? selectedId + 1 : 0)}
      />
    </div>
  );
};

export default NavigationButton;
