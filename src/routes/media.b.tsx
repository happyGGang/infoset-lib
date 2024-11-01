import React, { useState } from 'react';
import Tab from '../components/tab';
import Index from '../components/index';
import { PREV_A, PREV_B, TITLE } from '../constants/media.constants';
import { createFileRoute } from '@tanstack/react-router';
import { MEDIA_A, MEDIA_B } from '../constants/media_component.constants';
import NavigationButton from '../components/navigation_button';
import SelectedComponent from '../components/selected_component';
import Title from '../components/title';
import Layout from '../components/layout';
import { useFullPageStore } from '../store/full_page.store';
import zoom from '../assets/img/zoom.svg';
import FullIndex from '../components/full_index';
import FullNavigation from '../components/full_navigation';

export const Route = createFileRoute('/media/b')({
  component: MediaWallTypeB,
});

function MediaWallTypeB() {
  const [selectedId, setSelectedId] = useState(0);
  const { toggleFullPage } = useFullPageStore();
  const { isFullPage } = useFullPageStore();
  const [isShow, setIsShow] = useState(false);

  const handleBackgroundClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      {isFullPage ? (
        <div
          className={'full'}
          style={{ backgroundImage: `url(${PREV_B[selectedId].img})` }}
          onClick={handleBackgroundClick}
        >
          <img src={zoom} alt="" className={'zoom'} onClick={toggleFullPage} />
          {isShow && <FullNavigation />}
          {isShow && <FullIndex list={PREV_B} selectedId={selectedId} onSelect={setSelectedId} />}
        </div>
      ) : (
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
      )}
    </>
  );
}
