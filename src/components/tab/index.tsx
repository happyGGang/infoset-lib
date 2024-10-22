import React from 'react';
import styles from './index.module.css';
import line from '../../assets/img/line.svg';
import { Link, useLocation } from '@tanstack/react-router';

interface TabProps {
  link: string;
}

const Tab: React.FC<TabProps> = ({ link }) => {
  const { pathname } = useLocation();

  const getTabLink = (tab: string) => (link === '/' ? `/${tab}` : `${link}/${tab}`);

  return (
    <div className={styles.container}>
      <ul className={styles.tab_group}>
        {['a', 'b'].map((tab) => (
          <li key={tab}>
            <Link
              to={getTabLink(tab)}
              className={pathname.split('/').pop() === tab ? styles.active : ''}
            >
              type {tab.toUpperCase()}
              <img
                src={line}
                alt=""
                className={pathname.split('/').pop() === tab ? styles.visible : styles.hidden}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
