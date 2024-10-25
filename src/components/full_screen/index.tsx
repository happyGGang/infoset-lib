import tilt from '../../assets/img/tilt.svg';
import full from '../../assets/img/full.svg';
import disable_full from '../../assets/img/disable_full.svg';
import React from 'react';
import styles from './index.module.css';

interface FullScreenProps {
  selectedId: number;
  fullScreenStates?: boolean[];
  setFullScreenStates: React.Dispatch<React.SetStateAction<boolean[]>>;
  horizontalMode?: boolean[];
  setHorizontalMode?: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const FullScreen: React.FC<FullScreenProps> = ({
  selectedId,
  setFullScreenStates,
  setHorizontalMode,
  horizontalMode,
}) => {
  const toggleState = (
    updateFunction: React.Dispatch<React.SetStateAction<boolean[]>> | undefined
  ) => {
    if (updateFunction) {
      updateFunction((prevStates) =>
        prevStates.map((state, index) => (index === selectedId ? !state : state))
      );
    }
  };

  const toggleFullScreen = () => {
    // 세로 모드일 경우 풀 스크린을 비활성화
    if (horizontalMode && horizontalMode[selectedId]) {
      return; // 아무것도 하지 않고 함수 종료
    }
    toggleState(setFullScreenStates);
  };

  const toggleHorizontalMode = () => toggleState(setHorizontalMode);

  const isDisabled = horizontalMode && horizontalMode[selectedId];

  return (
    <div className={styles.wrapper}>
      {setHorizontalMode && (
        <img src={tilt} alt={'tilt'} onClick={toggleHorizontalMode} className={styles.tilt} />
      )}
      <img
        src={!isDisabled ? disable_full : full}
        alt={'full'}
        onClick={toggleFullScreen}
        className={styles.full}
      />
    </div>
  );
};

export default FullScreen;
