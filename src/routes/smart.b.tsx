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
import { PREV_A, TITLE } from '../constants/media.constants';
import zoom from '../assets/img/zoom.svg';
import { MEDIA_A } from '../constants/media_component.constants';
import { useFullPageStore } from '../store/full_page.store';

export const Route = createFileRoute('/smart/b')({
  component: SmartTypeB,
});

function SmartTypeB() {
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
            <Tab link={'smart'} />
            <Title title={TITLE_B[selectedId]} />
            <NavigationButton selectedId={selectedId} totalLength={7} onSelect={setSelectedId}>
              <SelectedComponent components={SMART_B} selectedId={selectedId} />
            </NavigationButton>
          </div>
          <Index list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
        </Layout>
      )}
    </>
  );
}
