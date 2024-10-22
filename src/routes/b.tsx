import Tab from '../components/tab';
import Prev from '../components/prev';
import styles from '../style/media.module.css';
import { B } from '../constants/media.constants';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/b')({
  component: MediaWallTypeB,
});

function MediaWallTypeB() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/'} />
      </div>
      <Prev list={B} />
    </div>
  );
}
