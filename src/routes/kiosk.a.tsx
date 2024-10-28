import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { PREV_A, TITLE } from '../constants/kiosk.constants';
import Title from '../components/title';
import { KIOSK_A } from '../constants/smart_component.constants';

export const Route = createFileRoute('/kiosk/a')({
  component: KioskTypeA,
});

function KioskTypeA() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <div className={'content'}>
        <Tab link={'kiosk'} />
        <Title title={TITLE[selectedId]} />
        <NavigationButton selectedId={selectedId} totalLength={10} onSelect={setSelectedId}>
          <SelectedComponent components={KIOSK_A} selectedId={selectedId} />
        </NavigationButton>
      </div>
      <Index list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
    </>
  );
}
