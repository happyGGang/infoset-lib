import React from 'react';

interface SelectedComponentProps {
  components: React.ElementType[];
  selectedId: number;
  fullScreenStates: boolean[];
  setFullScreenStates: React.Dispatch<React.SetStateAction<boolean[]>>;
  horizontalMode?: boolean[];
  setHorizontalMode?: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const SelectedComponent: React.FC<SelectedComponentProps> = ({
  components,
  selectedId,
  fullScreenStates,
  setFullScreenStates,
  horizontalMode = [],
  setHorizontalMode,
}) => {
  const SelectedComponent = components[selectedId] || components[0];

  return (
    <SelectedComponent
      horizontalMode={horizontalMode[selectedId] || horizontalMode[0]}
      setHorizontalMode={(state: any) => {
        if (typeof state === 'boolean' && setHorizontalMode) {
          setHorizontalMode((prev) => {
            const newStates = [...prev];
            newStates[selectedId] = state;
            return newStates;
          });
        }
      }}
      isFullScreen={fullScreenStates[selectedId] || fullScreenStates[0]}
      setIsFullScreen={(state: any) => {
        if (typeof state === 'boolean') {
          setFullScreenStates((prev) => {
            const newStates = [...prev];
            newStates[selectedId] = state;
            return newStates;
          });
        }
      }}
    />
  );
};

export default SelectedComponent;
