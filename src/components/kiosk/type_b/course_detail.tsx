import React, { useState } from 'react';
import styles from './course_detail.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';

const HorizontalMode: React.FC = () => {
  return <div className={styles.container_x} />;
};

const VerticalMode: React.FC = () => {
  return <div className={styles.container_y} />;
};

const CourseDetailB = () => {
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

export default CourseDetailB;
