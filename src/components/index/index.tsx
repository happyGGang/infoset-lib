import React from 'react';
import styles from './index.module.css';

interface PrevProps {
  selectedId: number;
  onSelect: (id: number) => void;
  list: { id: number; img: string }[];
}

const Index: React.FC<PrevProps> = ({ list, selectedId, onSelect }) => {
  const handleClick = (id: number) => onSelect(id);

  return (
    <div className={'index'}>
      <div className={styles.index}>
        <span>{selectedId + 1}</span>/{list.length}
      </div>
      <div className={styles.scroll}>
        {list.map((item) => (
          <img
            alt=""
            key={item.id}
            src={item.img}
            className={`${styles.prev_btn} ${selectedId === item.id ? styles.active : ''}`}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
