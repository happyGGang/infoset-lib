import React from 'react';

interface Props {
  mode: 'x' | 'y';
}

const HorizontalMode: React.FC = () => {
  return <div>가로 모드입니다!</div>;
};

const VerticalMode: React.FC = () => {
  return <div>세로 모드입니다!</div>;
};

const BookInformationA: React.FC<Props> = ({ mode }) => {
  return <>{mode === 'x' ? <HorizontalMode /> : <VerticalMode />}</>;
};

export default BookInformationA;
