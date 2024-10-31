import React, { useState } from 'react';
import styles from './information.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const HorizontalMode: React.FC = () => {
  return <div className={styles.container_x}></div>;
};

const VerticalMode: React.FC = () => {
  return <div className={styles.container_y}></div>;
};

const InformationB = () => {
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

export default InformationB;
