import Tab from '../components/tab';
import Prev from '../components/prev';
import styles from '../style/kiosk.module.css';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/kiosk/b')({
  component: KioskTypeB,
});

function KioskTypeB() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/kiosk'} />
      </div>
      <Prev />
    </div>
  );
}
