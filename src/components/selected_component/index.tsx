import React from 'react';

interface SelectedComponentProps {
  components: React.ElementType[];
  selectedId: number;
}

const SelectedComponent: React.FC<SelectedComponentProps> = ({ components, selectedId }) => {
  const SelectedComponent = components[selectedId] || components[0];

  return <SelectedComponent />;
};

export default SelectedComponent;
