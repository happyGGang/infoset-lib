import { useState } from 'react';
import Tab from '../components/tab';
import Prev from '../components/prev';
import FullScreen from '../components/full_screen';
import { PREV_A } from '../constants/media.constants';
import { createFileRoute } from '@tanstack/react-router';
import { MEDIA_A } from '../constants/component.constants';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';

export const Route = createFileRoute('/media/a')({
  component: MediaWallTypeA,
});

function MediaWallTypeA() {
  const [selectedId, setSelectedId] = useState(0);
  const [fullScreenStates, setFullScreenStates] = useState<boolean[]>(Array(8).fill(false));

  return (
    <>
      <div className={'content'}>
        <Tab link={'media'} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent
            components={MEDIA_A}
            selectedId={selectedId}
            fullScreenStates={fullScreenStates}
            setFullScreenStates={setFullScreenStates}
          />
        </NavigationButton>
        <FullScreen selectedId={selectedId} setFullScreenStates={setFullScreenStates} />
      </div>
      <Prev list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
    </>
  );
}
