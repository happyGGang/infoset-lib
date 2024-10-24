import React from 'react';
import styles from './index.module.css';
import line from '../../assets/img/line.svg';
import { Link, useLocation } from '@tanstack/react-router';

interface TabProps {
  link: 'media' | 'kiosk' | 'smart';
}

const Tab: React.FC<TabProps> = ({ link }) => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      {['a', 'b'].map((tab) => (
        <div key={tab} className={styles.wrapper}>
          <Link
            to={`/${link}/${tab}`}
            className={pathname.split('/').pop() === tab ? styles.active : ''}
          >
            type {tab.toUpperCase()}
          </Link>
          <img
            src={line}
            alt=""
            style={{ display: pathname.split('/').pop() === tab ? 'block' : 'none' }}
          />
        </div>
      ))}
    </div>
  );
};

export default Tab;
