import React, { useState } from 'react';
import styles from './information.module.css';
import section_0 from '../../../assets/img/kiosk/type_a/section_0.svg';
import section_1 from '../../../assets/img/kiosk/type_a/section_1.svg';
import section_2 from '../../../assets/img/kiosk/type_a/section_2.svg';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const HorizontalMode: React.FC = () => {
  return (
    <div className={styles.container_x}>
      <div className={styles.content}>
        <div className={styles.scroll}>
          <div className={styles.left}>
            <img src={section_0} className={styles.time} alt="" />
            <img src={section_1} className={styles.rest} alt="" />
          </div>
          <div className={styles.right}>
            <img src={section_2} className={styles.return} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  return <div className={styles.container_y}></div>;
};

const InformationA = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    horizontalMode ? toggleLandscape(true) : toggleLandscape(false);
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

export default InformationA;
