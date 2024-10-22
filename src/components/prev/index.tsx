import React, { useState } from 'react';
import styles from './index.module.css';

interface PrevProps {
  list: { id: number; img: string }[];
  onSelect: (id: number) => void;
}

const Prev: React.FC<PrevProps> = ({ list, onSelect }) => {
  const [selectedId, setSelectedId] = useState(0);

  const handleClick = (id: number) => {
    onSelect(id);
    setSelectedId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <span>{selectedId + 1}</span>/{list.length}
      </div>
      <div className={styles.scroll}>
        {list.map((item) => (
          <img
            src={item.img}
            alt=""
            className={`${styles.prev_btn} ${selectedId === item.id ? styles.active : ''}`}
            key={item.id}
            onClick={() => handleClick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Prev;
