import React from 'react';

interface Props {
  isFullScreen: boolean;
  setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>;
  horizontalMode: boolean;
  setHorizontalMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const HorizontalMode: React.FC = () => {
  return <div>가로 모드입니다!</div>;
};

const VerticalMode: React.FC = () => {
  return <div>세로 모드입니다!</div>;
};

const NoticeA: React.FC<Props> = ({ horizontalMode }) => {
  return <>{horizontalMode ? <HorizontalMode /> : <VerticalMode />}</>;
};

export default NoticeA;
