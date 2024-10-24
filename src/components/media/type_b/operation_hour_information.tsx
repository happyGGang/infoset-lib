import React from 'react';
import styles from './operation_hour_information.module.css';
import Zoom from '../../zoom';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HoursInformationB: React.FC<Props> = ({ isFullScreen, setIsFullScreen }) => {
  return (
    <div className={styles.container}>
      <Zoom isFullScreen={isFullScreen} onClick={() => setIsFullScreen(false)} />
    </div>
  );
};

export default HoursInformationB;
