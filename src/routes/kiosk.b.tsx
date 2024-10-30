import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { PREV_B, TITLE } from '../constants/kiosk.constants';
import Title from '../components/title';
import { KIOSK_B } from '../constants/kiosk_component.constants';
import Layout from '../components/layout';

export const Route = createFileRoute('/kiosk/b')({
  component: KioskTypeB,
});

function KioskTypeB() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <Layout>
      <div className={'content'}>
        <Tab link={'kiosk'} />
        <Title title={TITLE[selectedId]} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent components={KIOSK_B} selectedId={selectedId} />
        </NavigationButton>
      </div>
      <Index list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
    </Layout>
  );
}
