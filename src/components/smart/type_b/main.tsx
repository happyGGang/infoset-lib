import React, { useState } from 'react';
import styles from './main.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import character from '../../../assets/img/smart/type_b/character.svg';
import book from '../../../assets/img/smart/type_b/book.svg';
import search from '../../../assets/img/smart/type_b/search.svg';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

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
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    toggleLandscape();
  }

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={false} onClick={handleFullPage} />
      </div>
    </>
  );
};

export default MainA;
