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
import FullIndex from '../components/full_index';
import FullNavigation from '../components/full_navigation';

export const Route = createFileRoute('/media/a')({
  component: MediaWallTypeA,
});

function MediaWallTypeA() {
  const [selectedId, setSelectedId] = useState(0);
  const { toggleFullPage, isFullPage } = useFullPageStore();
  const [isShow, setIsShow] = useState(false);

  const handleBackgroundClick = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      {isFullPage ? (
        <div
          className={'full'}
          style={{ backgroundImage: `url(${PREV_A[selectedId].img})`, cursor: 'pointer' }}
          onClick={handleBackgroundClick}
        >
          <img
            src={zoom}
            alt=""
            className={'zoom'}
            onClick={(e) => {
              e.stopPropagation(); // 이미지 클릭 시 배경 클릭 이벤트 방지
              toggleFullPage();
            }}
          />
          {isShow && <FullNavigation />}
          {isShow && <FullIndex list={PREV_A} selectedId={selectedId} onSelect={setSelectedId} />}
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
