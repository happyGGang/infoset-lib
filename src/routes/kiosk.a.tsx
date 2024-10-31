import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { PREV_A, TITLE } from '../constants/kiosk.constants';
import Title from '../components/title';
import { KIOSK_A } from '../constants/kiosk_component.constants';
import Layout from '../components/layout';
import zoom from '../assets/img/zoom.svg';
import { MEDIA_A } from '../constants/media_component.constants';
import { useFullPageStore } from '../store/full_page.store';

export const Route = createFileRoute('/kiosk/a')({
  component: KioskTypeA,
});

function KioskTypeA() {
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
            <Tab link={'kiosk'} />
            <Title title={TITLE[selectedId]} />
            <NavigationButton selectedId={selectedId} totalLength={10} onSelect={setSelectedId}>
              <SelectedComponent components={KIOSK_A} selectedId={selectedId} />
            </NavigationButton>
          </div>
          <Index list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />
        </Layout>
      )}
    </>
  );
}
