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
import BookInformation from '../components/media/type_a/book_information';
import Promotion from '../components/media/type_a/promotion';

export const Route = createFileRoute('/a')({
  component: MediaWallTypeA,
});
function MediaWallTypeA() {
  const [selectedId, setSelectedId] = useState<number>(0);
  const [fullScreenStates, setFullScreenStates] = useState<boolean[]>(Array(8).fill(false)); // 각 컴포넌트의 fullscreen 상태 배열

  const renderComponent = () => {
    const components = [
      WelcomeMessage,
      Notice,
      BookInformation,
      Promotion,
      ReturnBook,
      HoursInformation,
      Event,
      LineOfBook,
    ];

    const SelectedComponent = components[selectedId] || WelcomeMessage;

    return (
      <SelectedComponent
        isFullScreen={fullScreenStates[selectedId] || fullScreenStates[0]}
        setIsFullScreen={(state) =>
          typeof state === 'boolean' &&
          setFullScreenStates((prev) => {
            const newStates = [...prev];
            newStates[selectedId] = state;
            return newStates;
          })
        }
      />
    );
  };

  const handlePrev = () => setSelectedId((prev) => (prev > 0 ? prev - 1 : 7));
  const handleNext = () => setSelectedId((prev) => (prev < 7 ? prev + 1 : 0));

  const toggleFullScreen = () => {
    setFullScreenStates((prevStates) =>
      prevStates.map((state, index) => (index === selectedId ? !state : state))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tab link={'/'} />
        <div className={styles.wrapper}>
          <div onClick={handlePrev} className={styles.prev}></div>
          {renderComponent()}
          <div onClick={handleNext} className={styles.next}></div>
        </div>
        <div onClick={toggleFullScreen} className={styles.full}></div>
      </div>
      <Prev list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
    </div>
  );
}
