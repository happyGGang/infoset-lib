import React from 'react';
import styles from './index.module.css';
import { Link, useLocation } from '@tanstack/react-router';

const FullNavigation: React.FC = () => {
  const { pathname } = useLocation();

  const menu = [
    { path: '/media/a', label: '미디어월', active: pathname.startsWith('/media') },
    { path: '/kiosk/a', label: '이용안내키오스크', active: pathname.startsWith('/kiosk') },
    { path: '/smart/a', label: '스마트추천도서', active: pathname.startsWith('/smart') },
  ];

  return (
    <div className={styles.navigation}>
      <h1 className={styles.header}>인포셋도서관</h1>
      <div className={styles.menu}>
        {menu.map(({ path, label, active }) => (
          <Link className={active ? styles.active : ''} to={path} key={path}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FullNavigation;
