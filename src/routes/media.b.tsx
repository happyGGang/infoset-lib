import React, { useState } from 'react';
import Tab from '../components/tab';
import Index from '../components/index';
import { PREV_B, TITLE } from '../constants/media.constants';
import { createFileRoute } from '@tanstack/react-router';
import { MEDIA_B } from '../constants/media_component.constants';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import Title from '../components/title';
import Layout from '../components/layout';

export const Route = createFileRoute('/media/b')({
  component: MediaWallTypeB,
});

function MediaWallTypeB() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <Layout>
      <div className={'content'}>
        <Tab link={'media'} />
        <Title title={TITLE[selectedId]} />
        <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
          <SelectedComponent components={MEDIA_B} selectedId={selectedId} />
        </NavigationButton>
      </div>
      <Index list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
    </Layout>
  );
}
