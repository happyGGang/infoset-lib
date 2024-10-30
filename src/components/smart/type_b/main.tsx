import React, { useState } from 'react';
import styles from './main.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import character from '../../../assets/img/smart/type_b/character.svg';
import book from '../../../assets/img/smart/type_b/book.svg';
import search from '../../../assets/img/smart/type_b/search.svg';

const HorizontalMode: React.FC = () => {
  return (
    <div className={styles.container_x}>
      <img src={character} alt="" className={styles.character_x} />
      <img src={book} alt="" className={styles.book_x} />
      <img src={search} alt="" className={styles.search_x} />
    </div>
  );
};

const VerticalMode: React.FC = () => {
  return (
    <div className={styles.container_y}>
      <img src={character} alt="" className={styles.character_y} />
      <img src={book} alt="" className={styles.book_y} />
      <img src={search} alt="" className={styles.search_y} />
    </div>
  );
};

const MainA: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const [full, setFull] = useState(false);

  const handleClick = () => setHorizontalMode((prev) => !prev);

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={!horizontalMode} onClick={() => console.log(123)} />
      </div>
    </>
  );
};

export default MainA;
