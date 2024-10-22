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
import LineOfBook from '../components/media/type_a/line_of_book';
import Event from '../components/media/type_a/event';

export const Route = createFileRoute('/a')({
  component: MediaWallTypeA,
});

function MediaWallTypeA() {
  const [selectedId, setSelectedId] = useState<number>(0);

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
      case 6:
        return <Event />;
      case 7:
        return <LineOfBook />;
      default:
        return <WelcomeMessage />;
    }
  };

  const handlePrev = () => setSelectedId((prev) => (prev > 0 ? prev - 1 : 7));
  const handleNext = () => setSelectedId((prev) => (prev < 7 ? prev + 1 : 0));

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/'} />
        <div className={styles.wrapper}>
          <div onClick={handlePrev} className={styles.prev}></div>
          {renderComponent()}
          <div onClick={handleNext} className={styles.next}></div>
        </div>
      </div>
      <Prev list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
    </div>
  );
}
