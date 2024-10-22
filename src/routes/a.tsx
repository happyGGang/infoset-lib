import Tab from '../components/tab';
import Prev from '../components/prev';
import styles from '../style/media_wall.module.css';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/a')({
  component: MediaWallTypeA,
});

function MediaWallTypeA() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/'} />
      </div>
      <Prev />
    </div>
  );
}
