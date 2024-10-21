import React from 'react';
import styles from './index.module.css';
import { Link, useLocation } from '@tanstack/react-router';
import { NAVIGATION_LIST } from '../../constants/navigation.constants';

const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.navigation}>
      <h1 className={styles.header}>인포셋도서관</h1>
      <ul className={styles.menu}>
        {NAVIGATION_LIST.map(({ path, label }) => (
          <li key={path}>
            <Link className={pathname === path ? styles.active : ''} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
