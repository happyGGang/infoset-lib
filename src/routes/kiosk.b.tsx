import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { MEDIA_A } from '../constants/media_component.constants';
import { PREV_B, TITLE } from '../constants/kiosk.constants';
import Title from '../components/title';

export const Route = createFileRoute('/kiosk/b')({
  component: KioskTypeB,
});

function KioskTypeB() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <div className={'content'}>
        <Tab link={'kiosk'} />
        <Title title={TITLE[selectedId]} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent components={MEDIA_A} selectedId={selectedId} />
        </NavigationButton>
      </div>
      <Index list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
    </>
  );
}
