import React, { useEffect, useState } from 'react';
import styles from './keyword.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import {
  BIGDATA_X_B,
  BIGDATA_Y_B,
  KEYWORD_X,
  LIB_X,
  LIB_Y,
  RESULT_X_B,
  RESULT_Y_B,
} from '../../../constants/smart.constants';
import refresh from '../../../assets/img/smart/type_a/refresh.svg';
import cancel from '../../../assets/img/smart/type_a/dark_close.svg';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import custom from '../../../assets/img/smart/type_b/custom_btn.png';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

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

const HorizontalMode: React.FC = () => {
  const [data, setData] = useState(0);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [animate, setAnimate] = useState(true);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');
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

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeywords((prevSelected) => {
      if (prevSelected.includes(keyword)) {
        return prevSelected.filter((k) => k !== keyword);
      }
      if (prevSelected.length < 3) {
        return [...prevSelected, keyword];
      }
      return prevSelected;
    });
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAge(event.target.value);
  };

  const handleKeywordRemove = (keyword: string) => {
    setSelectedKeywords((prevSelected) => prevSelected.filter((k) => k !== keyword));
  };

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return `<span class="${className}" style="width: 0.46875rem; height: 0.46875rem; border-radius: 50%; opacity: 1;"></span>`;
    },
  };

  return (
    <div className={styles.container_x}>
      <Tabs
        value={value}
        onChange={handleChange}
        className={styles.tabs_x}
        sx={{
          width: '62.10938rem',
          borderBottom: '1px solid #191F28',
          minHeight: '2.5rem',
          '& .MuiTabs-indicator': {
            backgroundColor: '#7B3AD8',
            maxHeight: '1rem',
          },
        }}
      >
        <Tab
          label="키워드추천"
          className={styles.tab_y}
          sx={{
            minHeight: '2.5rem',
            height: '2.5rem',
            minWidth: '20.7031267rem',
            padding: '1.1rem 0 1.1rem 0',
            fontSize: '0.97656rem',
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
            minHeight: '2.5rem',
            height: '2.5rem',
            minWidth: '20.7031267rem',
            padding: '1.1rem 0 1.1rem 0',
            fontSize: '0.97656rem',
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
            minHeight: '2.5rem',
            height: '2.5rem',
            minWidth: '20.7031267rem',
            padding: '1.1rem 0 1.1rem 0',
            fontSize: '0.97656rem',
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
          className={styles.swiper_x}
        >
          {RESULT_X_B.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: '62.10938rem !important', height: '27.42188rem' }}
            >
              <img src={item.img} alt="" className={styles.swiper_x_img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <img src={custom} alt="" className={styles.custom_btn_x} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={styles.lib_title_x}>우리 도서관 사서 선생님의 선택</div>
        <div className={styles.lib_caption_x}>
          사서 선생님들이 이용자들을 위해 고른 추천도서는 어떠세요?
        </div>
        <Swiper
          loop
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={pagination}
          modules={[Pagination]}
          className={styles.lib_swiper_x}
        >
          {LIB_X.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: '62.10938 !important', height: '18.80859rem' }}
            >
              <img src={item.img} alt="" className={styles.lib_img_x} />
            </SwiperSlide>
          ))}
        </Swiper>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={styles.bigdata_title_x}>빅데이터는 어떤 책을 추천했을까요?</div>
        <div className={styles.bigdata_caption_x}>
          전국 공공도서관 연령대별 추천도서를 만나보세요
        </div>
        <Tabs
          value={data}
          onChange={handleChangeData}
          sx={{
            width: '62.10938rem',
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
              minHeight: '3.125rem',
              height: '3.125rem',
              minWidth: '12.42188rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.97656rem',
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
              minHeight: '3.125rem',
              height: '3.125rem',
              minWidth: '12.42188rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.97656rem',
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
              minHeight: '3.125rem',
              height: '3.125rem',
              minWidth: '12.42188rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.97656rem',
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
              minHeight: '3.125rem',
              height: '3.125rem',
              minWidth: '12.42188rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.97656rem',
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
              minHeight: '3.125rem',
              height: '3.125rem',
              minWidth: '12.42188rem',
              padding: '1.1rem 0 1.1rem 0',
              fontSize: '0.97656rem',
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
          className={styles.bigdata_swiper_x}
        >
          {BIGDATA_X_B.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: '59.86328rem !important', height: '15.97907rem' }}
            >
              <img src={item.img} alt="" className={styles.bigdata__img_x} />
            </SwiperSlide>
          ))}
        </Swiper>
      </TabPanel>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const [data, setData] = useState(0);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [animate, setAnimate] = useState(true);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');
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

  const handleKeywordClick = (keyword: string) => {
    setSelectedKeywords((prevSelected) => {
      if (prevSelected.includes(keyword)) {
        return prevSelected.filter((k) => k !== keyword);
      }
      if (prevSelected.length < 3) {
        return [...prevSelected, keyword];
      }
      return prevSelected;
    });
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAge(event.target.value);
  };

  const handleKeywordRemove = (keyword: string) => {
    setSelectedKeywords((prevSelected) => prevSelected.filter((k) => k !== keyword));
  };

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
          {RESULT_Y_B.map((item, index) => (
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
          {LIB_Y.map((item, index) => (
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
          {BIGDATA_Y_B.map((item, index) => (
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

const KeywordB: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    toggleLandscape();
  }

  return (
    <>
      {horizontalMode ? <HorizontalMode /> : <VerticalMode />}
      <div className={styles.wrapper}>
        <Tilt onClick={handleClick} />
        <Full disabled={false} onClick={handleFullPage} />
      </div>
    </>
  );
};

export default KeywordB;
