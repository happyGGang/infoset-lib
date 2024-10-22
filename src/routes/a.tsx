import Tab from '../components/tab';
import Prev from '../components/prev';
import styles from '../style/media.module.css';
import { createFileRoute } from '@tanstack/react-router';
import { A } from '../constants/media.constants';
import WelcomeMessage from '../components/media/type_a/welcome_message';

export const Route = createFileRoute('/a')({
  component: MediaWallTypeA,
});

function MediaWallTypeA() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/'} />
        <WelcomeMessage />
      </div>
      <Prev list={A} />
    </div>
  );
}
