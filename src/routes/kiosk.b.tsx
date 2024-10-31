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
import { useFullPageStore } from '../store/full_page.store';
import { PREV_A } from '../constants/media.constants';
import zoom from '../assets/img/zoom.svg';
import { MEDIA_A } from '../constants/media_component.constants';

export const Route = createFileRoute('/kiosk/b')({
  component: KioskTypeB,
});

function KioskTypeB() {
  const [selectedId, setSelectedId] = useState(0);
  const { toggleFullPage, isFullPage } = useFullPageStore();

  return (
    <>
      {isFullPage ? (
        <div className={'full'} style={{ backgroundImage: `url(${PREV_B[selectedId].img})` }}>
          <img src={zoom} alt="" className={'zoom'} onClick={toggleFullPage} />
        </div>
      ) : (
        <Layout>
          <div className={'content'}>
            <Tab link={'kiosk'} />
            <Title title={TITLE[selectedId]} />
            <NavigationButton selectedId={selectedId} totalLength={10} onSelect={setSelectedId}>
              <SelectedComponent components={KIOSK_B} selectedId={selectedId} />
            </NavigationButton>
          </div>
          <Index list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />
        </Layout>
      )}
    </>
  );
}
