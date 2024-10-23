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
    switch (selectedId) {
      case 0:
        return (
          <WelcomeMessage
            isFullScreen={fullScreenStates[0]}
            setIsFullScreen={(state) =>
              setFullScreenStates((prev) => {
                const newStates = [...prev];
                if (typeof state === 'boolean') {
                  newStates[0] = state;
                }
                return newStates;
              })
            }
          />
        );
      case 1:
        return <Notice isFullScreen={fullScreenStates[1]} />;
      case 2:
        return <BookInformation isFullScreen={fullScreenStates[2]} />;
      case 3:
        return <Promotion isFullScreen={fullScreenStates[3]} />;
      case 4:
        return <ReturnBook isFullScreen={fullScreenStates[4]} />;
      case 5:
        return <HoursInformation isFullScreen={fullScreenStates[5]} />;
      case 6:
        return <Event isFullScreen={fullScreenStates[6]} />;
      case 7:
        return <LineOfBook isFullScreen={fullScreenStates[7]} />;
      default:
        return (
          <WelcomeMessage
            isFullScreen={fullScreenStates[0]}
            setIsFullScreen={(state) =>
              setFullScreenStates((prev) => {
                const newStates = [...prev];
                if (typeof state === 'boolean') {
                  newStates[0] = state;
                }
                return newStates;
              })
            }
          />
        );
    }
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
