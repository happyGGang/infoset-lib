import React, { useEffect, useState } from 'react';
import styles from './keyword.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { BIGDATA_Y, CUSTOM_Y, RESULT_Y } from '../../../constants/smart.constants';
import { Pagination } from 'swiper/modules';
import custom from '../../../assets/img/smart/type_b/custom_btn.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const HorizontalMode: React.FC = () => {
  return <div className={styles.container_x}></div>;
};

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const VerticalMode: React.FC = () => {
  const [data, setData] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [value, setValue] = React.useState(0);

  const handleChangeData = (event: React.SyntheticEvent, newValue: number) => {
    setData(newValue);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.26356rem; height: 0.26356rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return (
    <div className={styles.container_y}>
      <Tabs
        value={value}
        onChange={handleChange}
        className={styles.tabs_y}
        sx={{
          width: '19.75725rem',
          borderBottom: '1px solid #191F28',
          minHeight: '1.49rem',
          '& .MuiTabs-indicator': {
            backgroundColor: '#7B3AD8',
            maxHeight: '0.05rem',
          },
        }}
      >
        <Tab
          label="키워드추천"
          className={styles.tab_y}
          sx={{
            minHeight: '1.49rem',
            height: '1.49rem',
            minWidth: '6.58575rem',
            padding: '1.1rem 0 1.1rem 0',
            fontSize: '0.54881rem',
            color: '#6B7684',
            fontWeight: '700',
            '&.Mui-selected': {
              color: '#191F28',
            },
          }}
        />
        <Tab
          label="사서추천"
          className={styles.tab_y}
          sx={{
            minHeight: '1.49rem',
            height: '1.49rem',
            minWidth: '6.58575rem',
            padding: '1.1rem 0 1.1rem 0',
            fontSize: '0.54881rem',
            color: '#6B7684',
            fontWeight: '700',
            '&.Mui-selected': {
              color: '#191F28',
            },
          }}
        />
        <Tab
          label="빅데이터추천"
          className={styles.tab_y}
          sx={{
            minHeight: '1.49rem',
            height: '1.49rem',
            minWidth: '6.58575rem',
            padding: '1.1rem 0 1.1rem 0',
            fontSize: '0.54881rem',
            color: '#6B7684',
            fontWeight: '700',
            '&.Mui-selected': {
              color: '#191F28',
            },
          }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Swiper
          loop
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={pagination}
          modules={[Pagination]}
          className={styles.result_swiper_y}
        >
          {RESULT_Y.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: '18.43988rem !important', height: '29.70175rem' }}
            >
              <img src={item.img} alt="" className={styles.result__img_y} />
            </SwiperSlide>
          ))}
        </Swiper>
        <img src={custom} alt="" className={styles.custom_btn_y} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.lib_title_y}>우리 도서관 사서 선생님의 선택</div>
        <div className={styles.lib_caption_y}>
          사서 선생님들이 이용자들을 위해 고른 추천도서는 어떠세요?
        </div>
        <Swiper
          loop
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={pagination}
          modules={[Pagination]}
          className={styles.lib_swiper_y}
        >
          {CUSTOM_Y.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: '19.09867rem !important', height: '25.52688rem' }}
            >
              <img src={item.img} alt="" className={styles.lib_img_y} />
            </SwiperSlide>
          ))}
        </Swiper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.bigdata_title_y}>빅데이터는 어떤 책을 추천했을까요?</div>
        <div className={styles.bigdata_caption_y}>
          전국 공공도서관 연령대별 추천도서를 만나보세요
        </div>
        <Tabs
          value={data}
          onChange={handleChangeData}
          sx={{
            width: '19.75725rem',
            borderRadius: '1.5rem',
            background: '#8B95A1',
            minHeight: '1.75619rem',
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          <Tab
            label="아동"
            sx={{
              borderRadius: '1.5rem',
              minHeight: '1.75619rem',
              height: '1.75619rem',
              minWidth: '3.95144rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.54881rem',
              color: '#FFFFFF',
              fontWeight: '700',
              '&.Mui-selected': {
                color: '#FFFFFF',
                background: '#191F28',
              },
            }}
          />
          <Tab
            label="청소년"
            sx={{
              borderRadius: '1.5rem',
              minHeight: '1.75619rem',
              height: '1.75619rem',
              minWidth: '3.95144rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.54881rem',
              color: '#FFFFFF',
              fontWeight: '700',
              '&.Mui-selected': {
                color: '#FFFFFF',
                background: '#191F28',
              },
            }}
          />
          <Tab
            label="20~30대"
            sx={{
              borderRadius: '1.5rem',
              minHeight: '1.75619rem',
              height: '1.75619rem',
              minWidth: '3.95144rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.54881rem',
              color: '#FFFFFF',
              fontWeight: '700',
              '&.Mui-selected': {
                color: '#FFFFFF',
                background: '#191F28',
              },
            }}
          />
          <Tab
            label="40~50대"
            sx={{
              borderRadius: '1.5rem',
              minHeight: '1.75619rem',
              height: '1.75619rem',
              minWidth: '3.95144rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.54881rem',
              color: '#FFFFFF',
              fontWeight: '700',
              '&.Mui-selected': {
                color: '#FFFFFF',
                background: '#191F28',
              },
            }}
          />
          <Tab
            label="60대 이상"
            sx={{
              borderRadius: '1.5rem',
              minHeight: '1.75619rem',
              height: '1.75619rem',
              minWidth: '3.95144rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.54881rem',
              color: '#FFFFFF',
              fontWeight: '700',
              '&.Mui-selected': {
                color: '#FFFFFF',
                background: '#191F28',
              },
            }}
          />
        </Tabs>
        <Swiper
          loop
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={pagination}
          modules={[Pagination]}
          className={styles.bigdata_swiper_y}
        >
          {BIGDATA_Y.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: '19.09867rem !important', height: '22.39045rem' }}
            >
              <img src={item.img} alt="" className={styles.bigdata__img_y} />
            </SwiperSlide>
          ))}
        </Swiper>
      </TabPanel>
    </div>
  );
};

const ResultB: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const [full, setFull] = useState(false);

  const handleClick = () => setHorizontalMode((prev) => !prev);

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={!horizontalMode} onClick={() => console.log(123)} />
      </div>
    </>
  );
};

export default ResultB;
