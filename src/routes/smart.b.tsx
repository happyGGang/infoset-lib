import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { MEDIA_A } from '../constants/media_component.constants';
import { PREV_A } from '../constants/media.constants';

export const Route = createFileRoute('/smart/b')({
  component: SmartTypeB,
});

function SmartTypeB() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      <div className={'content'}>
        <Tab link={'smart'} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent components={MEDIA_A} selectedId={selectedId} />
        </NavigationButton>
      </div>
      <Index list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
    </>
  );
}
