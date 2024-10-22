import React from 'react';
import styles from './index.module.css';

interface PrevProps {
  list: { id: number; img: string }[];
}

const Prev: React.FC<PrevProps> = ({ list }) => {
  return (
    <div className={styles.container}>
      <div className={styles.index}>
        <span>1</span>/{list.length}
      </div>
      <div className={styles.scroll}>
        {list.map((item) => (
          <img src={item.img} alt="" className={styles.prev_btn} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Prev;
