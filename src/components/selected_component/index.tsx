import React from 'react';

interface SelectedComponentProps {
  components: React.ElementType[];
  selectedId: number;
  fullScreenStates: boolean[];
  setFullScreenStates: React.Dispatch<React.SetStateAction<boolean[]>>;
}

const SelectedComponent: React.FC<SelectedComponentProps> = ({
  components,
  selectedId,
  fullScreenStates,
  setFullScreenStates,
}) => {
  const SelectedComponent = components[selectedId] || components[0];

  return (
    <SelectedComponent
      isFullScreen={fullScreenStates[selectedId] || fullScreenStates[0]}
      setIsFullScreen={(state: any) =>
        typeof state === 'boolean' &&
        setFullScreenStates((prev) => {
          const newStates = [...prev];
          newStates[selectedId] = state;
          return newStates;
        })
      }
    />
  );
};

export default SelectedComponent;
