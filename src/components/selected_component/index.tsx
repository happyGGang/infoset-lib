import React from 'react';
import styles from './index.module.css';

interface SelectedComponentProps {
  components: React.ElementType[];
  selectedId: number;
}

const SelectedComponent: React.FC<SelectedComponentProps> = ({ components, selectedId }) => {
  const SelectedComponent = components[selectedId] || components[0];

  return (
    <div className={styles.wrapper}>
      <SelectedComponent />
    </div>
  );
};

export default SelectedComponent;
