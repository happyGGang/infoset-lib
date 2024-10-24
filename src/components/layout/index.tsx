import React from 'react';
import styles from './index.module.css';
import Navigation from '../navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
