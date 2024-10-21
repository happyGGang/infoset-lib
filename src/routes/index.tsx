import { createFileRoute } from '@tanstack/react-router';
import styles from '../style/media_wall.module.css';
import Tab from '../components/tab';
import Prev from '../components/prev';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab />
      </div>
      <Prev />
    </div>
  );
}
