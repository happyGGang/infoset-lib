import { createFileRoute } from '@tanstack/react-router';
import Tab from '../components/tab';
import Prev from '../components/prev';
import styles from '../style/media_wall.module.css';

export const Route = createFileRoute('/b')({
  component: MediaWallTypeB,
});

function MediaWallTypeB() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/'} />
      </div>
      <Prev />
    </div>
  );
}
