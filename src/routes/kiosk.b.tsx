import Tab from '../components/tab';
import Index from '../components/index';
import { createFileRoute } from '@tanstack/react-router';
import React, { useState } from 'react';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import { PREV_B, PREV_B_X, TITLE } from '../constants/kiosk.constants';
import Title from '../components/title';
import { KIOSK_B } from '../constants/kiosk_component.constants';
import Layout from '../components/layout';
import { useFullPageStore } from '../store/full_page.store';
import zoom from '../assets/img/zoom.svg';
import { useOrientationStore } from '../store/landscape.store';
import FullIndex from '../components/full_index';
import { PREV_A } from '../constants/media.constants';
import FullNavigation from '../components/full_navigation';

export const Route = createFileRoute('/kiosk/b')({
  component: KioskTypeB,
});

function KioskTypeB() {
  const [selectedId, setSelectedId] = useState(0);
  const { toggleFullPage, isFullPage } = useFullPageStore();
  const { isLandscape } = useOrientationStore();
  const [isShow, setIsShow] = useState(false);

  const handleBackgroundClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      {isFullPage ? (
        <div
          className={isLandscape ? 'full' : 'full_y'}
          style={{
            backgroundImage: !isLandscape
              ? `url(${PREV_B[selectedId].img}) `
              : `url(${PREV_B_X[selectedId].img})`,
          }}
          onClick={handleBackgroundClick}
        >
          <img src={zoom} alt="" className={'zoom'} onClick={toggleFullPage} />
          {isShow && <FullNavigation />}
          {isShow && <FullIndex list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />}
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
