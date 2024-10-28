import React, { useState } from 'react';
import Tab from '../components/tab';
import Index from '../components/index';
import FullScreen from '../components/full_screen';
import { PREV_B, TITLE } from '../constants/media.constants';
import { createFileRoute } from '@tanstack/react-router';
import { MEDIA_B } from '../constants/media_component.constants';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import Title from '../components/title';

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
        <Title title={TITLE[selectedId]} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent
            components={MEDIA_B}
            selectedId={selectedId}
            fullScreenStates={fullScreenStates}
            setFullScreenStates={setFullScreenStates}
          />
        </NavigationButton>
      </div>
      <Index list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
    </>
  );
}
