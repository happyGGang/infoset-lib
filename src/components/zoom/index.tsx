import React from 'react';
import styles from './index.module.css';

interface ZoomProps {
  isFullScreen: boolean;
  onClick: () => void;
}

const Zoom: React.FC<ZoomProps> = ({ isFullScreen, onClick }) => {
  return <>{isFullScreen && <div className={styles.zoom} onClick={onClick}></div>}</>;
};

export default Zoom;
