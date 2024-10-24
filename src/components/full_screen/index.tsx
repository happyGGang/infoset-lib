import React from 'react';
import styles from './index.module.css';

interface FullScreenProps {
  selectedId: number;
  setFullScreenStates: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const FullScreen: React.FC<FullScreenProps> = ({ selectedId, setFullScreenStates }) => {
  const toggleFullScreen = () => {
    setFullScreenStates((prevStates) =>
      prevStates.map((state, index) => (index === selectedId ? !state : state))
    );
  };

  return <div onClick={toggleFullScreen} className={styles.full}></div>;
};

export default FullScreen;
