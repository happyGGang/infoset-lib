import { useState } from 'react';
import Tab from '../components/tab';
import Prev from '../components/prev';
import FullScreen from '../components/full_screen';
import { PREV_B } from '../constants/media.constants';
import { createFileRoute } from '@tanstack/react-router';
import { MEDIA_B } from '../constants/component.constants';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';

export const Route = createFileRoute('/media/b')({
  component: MediaWallTypeB,
});

function MediaWallTypeB() {
  const [selectedId, setSelectedId] = useState(0);
  const [fullScreenStates, setFullScreenStates] = useState<boolean[]>(Array(8).fill(false));

  return (
    <>
      <div className={'content'}>
        <Tab link={'media'} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent
            components={MEDIA_B}
            selectedId={selectedId}
            fullScreenStates={fullScreenStates}
            setFullScreenStates={setFullScreenStates}
          />
        </NavigationButton>
        <FullScreen selectedId={selectedId} setFullScreenStates={setFullScreenStates} />
      </div>
      <Prev list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
    </>
  );
}
