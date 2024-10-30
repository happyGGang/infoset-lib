import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { PREV_B } from '../constants/smart.constants';
import Title from '../components/title';
import { TITLE_B } from '../constants/smart.constants';
import { SMART_B } from '../constants/smart_component.constants';
import Layout from '../components/layout';

export const Route = createFileRoute('/smart/b')({
  component: SmartTypeB,
});

function SmartTypeB() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <Layout>
      <div className={'content'}>
        <Tab link={'smart'} />
        <Title title={TITLE_B[selectedId]} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent components={SMART_B} selectedId={selectedId} />
        </NavigationButton>
      </div>
      <Index list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
    </Layout>
  );
}
