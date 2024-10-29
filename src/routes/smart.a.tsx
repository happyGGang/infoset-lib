import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { PREV_A } from '../constants/smart.constants';
import Title from '../components/title';
import { TITLE_A } from '../constants/smart.constants';
import { SMART_A } from '../constants/smart_component.constants';

export const Route = createFileRoute('/smart/a')({
  component: SmartTypeA,
});

function SmartTypeA() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <div className={'content'}>
        <Tab link={'smart'} />
        <Title title={TITLE_A[selectedId]} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent components={SMART_A} selectedId={selectedId} />
        </NavigationButton>
      </div>
      <Index list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
    </>
  );
}
