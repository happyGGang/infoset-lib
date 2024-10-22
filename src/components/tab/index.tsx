import React, { useState } from 'react';
import styles from './index.module.css';
import line from '../../assets/img/line.svg';
import { Link } from '@tanstack/react-router';

interface TabProps {
  link: string;
}

const Tab: React.FC<TabProps> = ({ link }) => {
  const [activeTab, setActiveTab] = useState('a');

  const getTabLink = (tab: string) => (link === '/' ? `/${tab}` : `${link}/${tab}`);

  return (
    <div className={styles.container}>
      <ul className={styles.tab_group}>
        {['a', 'b'].map((tab) => (
          <li key={tab} onClick={() => setActiveTab(tab)}>
            <Link className={styles.tab} to={getTabLink(tab)}>
              <div className={activeTab === tab ? styles.active : ''}>type {tab.toUpperCase()}</div>
              <img
                src={line}
                alt=""
                className={activeTab === tab ? styles.visible : styles.hidden}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
