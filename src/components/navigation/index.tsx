import React from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import styles from './index.module.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.navigation}>
      <h1 className={styles.header}>인포셋도서관</h1>
      <ul className={styles.menu}>
        <li>
          <Link className={currentPath === '/' ? styles.active : ''} to={'/'}>
            미디어월
          </Link>
        </li>
        <li>
          <Link className={currentPath === '/kiosk' ? styles.active : ''} to={'/kiosk'}>
            이용안내키오스크
          </Link>
        </li>
        <li>
          <Link className={currentPath === '/smart' ? styles.active : ''} to={'/smart'}>
            스마트추천도서
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
