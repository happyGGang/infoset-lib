import React from 'react';
import styles from './index.module.css';
import { Link, useLocation } from '@tanstack/react-router';

const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  const menu = [
    {
      path: '/',
      label: '미디어월',
      active: pathname.startsWith('/a') || pathname.startsWith('/b'),
    },
    { path: '/kiosk', label: '이용안내키오스크', active: pathname.startsWith('/kiosk') },
    { path: '/smart', label: '스마트추천도서', active: pathname.startsWith('/smart') },
  ];

  return (
    <div className={styles.navigation}>
      <h1 className={styles.header}>인포셋도서관</h1>
      <ul className={styles.menu}>
        {menu.map(({ path, label, active }) => (
          <li key={path}>
            <Link className={active ? styles.active : ''} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
