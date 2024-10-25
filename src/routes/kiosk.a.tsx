import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import FullScreen from '../components/full_screen';
import { PREV_A, TITLE } from '../constants/kiosk.constants';
import Title from '../components/title';
import { KIOSK_A } from '../constants/smart_component.constants';

export const Route = createFileRoute('/kiosk/a')({
  component: KioskTypeA,
});

function KioskTypeA() {
  const [selectedId, setSelectedId] = useState(0);
  const [fullScreenStates, setFullScreenStates] = useState<boolean[]>(Array(10).fill(false));
  const [horizontalMode, setHorizontalMode] = useState<boolean[]>(Array(10).fill(false));

  return (
    <>
      <div className={'content'}>
        <Tab link={'kiosk'} />
        <Title title={TITLE[selectedId]} />
        <NavigationButton selectedId={selectedId} totalLength={10} onSelect={setSelectedId}>
          <SelectedComponent
            components={KIOSK_A}
            selectedId={selectedId}
            fullScreenStates={fullScreenStates}
            setFullScreenStates={setFullScreenStates}
            horizontalMode={horizontalMode}
            setHorizontalMode={setHorizontalMode}
          />
        </NavigationButton>
        <FullScreen
          selectedId={selectedId}
          fullScreenStates={fullScreenStates}
          setFullScreenStates={setFullScreenStates}
          setHorizontalMode={setHorizontalMode}
          horizontalMode={horizontalMode}
        />
      </div>
      <Index list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
    </>
  );
}
