import React from 'react';
import styles from './index.module.css';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => <div className={styles.menu_title}>{title}</div>;

export default Title;
