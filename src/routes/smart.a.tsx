import Tab from '../components/tab';
import Prev from '../components/prev';
import styles from '../style/smart.module.css';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/smart/a')({
  component: SmartTypeA,
});

function SmartTypeA() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/smart'} />
      </div>
      <Prev />
    </div>
  );
}
