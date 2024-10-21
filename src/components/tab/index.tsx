import React, { useState } from 'react';
import styles from './index.module.css';
import line from '../../assets/img/line.svg';

const Tab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('typeA');

  const tabs = [
    { id: 'typeA', label: 'type A' },
    { id: 'typeB', label: 'type B' },
    { id: 'typeC', label: 'type C' },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.tab_group}>
        {tabs.map((tab) => (
          <li key={tab.id} onClick={() => setActiveTab(tab.id)} className={styles.tab}>
            <div className={activeTab === tab.id ? styles.active : ''}>{tab.label}</div>
            <img
              src={line}
              alt=""
              className={activeTab === tab.id ? styles.visible : styles.hidden}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
