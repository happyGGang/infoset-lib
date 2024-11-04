import React, { useEffect } from 'react';
import styles from './index.module.css';

interface PrevProps {
  selectedId: number;
  onSelect: (id: number) => void;
  list: { id: number; img: string }[];
}

const FullIndex: React.FC<PrevProps> = ({ list, selectedId, onSelect }) => {
  const handleClick = (id: number) => onSelect(id);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      const nextIndex = (selectedId + 1) % list.length;
      onSelect(nextIndex);
    } else if (event.key === 'ArrowLeft') {
      const prevIndex = (selectedId - 1 + list.length) % list.length;
      onSelect(prevIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedId, list.length]);

  return (
    <div className={styles.container}>
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

export default FullIndex;
