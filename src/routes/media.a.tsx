import React, { useState } from 'react';
import Tab from '../components/tab';
import Index from '../components/index';
import { PREV_A, TITLE } from '../constants/media.constants';
import { createFileRoute } from '@tanstack/react-router';
import { MEDIA_A } from '../constants/media_component.constants';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import Title from '../components/title';
import Layout from '../components/layout';
import { useFullPageStore } from '../store/full_page.store';
import zoom from '../assets/img/zoom.svg';

export const Route = createFileRoute('/media/a')({
  component: MediaWallTypeA,
});

function MediaWallTypeA() {
  const [selectedId, setSelectedId] = useState(0);
  const { toggleFullPage, isFullPage } = useFullPageStore();

  return (
    <>
      {isFullPage ? (
        <div className={'full'} style={{ backgroundImage: `url(${PREV_A[selectedId].img})` }}>
          <img src={zoom} alt="" className={'zoom'} onClick={toggleFullPage} />
        </div>
      ) : (
        <Layout>
          <div className={'content'}>
            <Tab link={'media'} />
            <Title title={TITLE[selectedId]} />
            <NavigationButton selectedId={selectedId} totalLength={8} onSelect={setSelectedId}>
              <SelectedComponent components={MEDIA_A} selectedId={selectedId} />
            </NavigationButton>
          </div>
          <Index list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
        </Layout>
      )}
    </>
  );
}
