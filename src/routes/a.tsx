import Tab from '../components/tab';
import Prev from '../components/prev';
import styles from '../style/media.module.css';
import { createFileRoute } from '@tanstack/react-router';
import { PREV_A } from '../constants/media.constants';
import Notice from '../components/media/type_a/notice';
import { useState } from 'react';
import WelcomeMessage from '../components/media/type_a/welcome_message';
import HoursInformation from '../components/media/type_a/operation_hour_information';
import ReturnBook from '../components/media/type_a/return_date';

export const Route = createFileRoute('/a')({
  component: MediaWallTypeA,
});

function MediaWallTypeA() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const renderComponent = () => {
    switch (selectedId) {
      case 0:
        return <WelcomeMessage />;
      case 1:
        return <Notice />;
      case 4:
        return <ReturnBook />;
      case 5:
        return <HoursInformation />;
      default:
        return <WelcomeMessage />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/'} />
        {renderComponent()}
      </div>
      <Prev list={PREV_A} onSelect={setSelectedId} />
    </div>
  );
}
