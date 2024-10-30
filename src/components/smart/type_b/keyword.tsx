import React, { useEffect, useState } from 'react';
import styles from './keyword.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { KEYWORD_X_A, KEYWORD_Y } from '../../../constants/smart.constants';
import refresh from '../../../assets/img/smart/type_a/refresh.svg';
import cancel from '../../../assets/img/smart/type_a/cancel.svg';

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const VerticalMode: React.FC = () => {
  const [value, setValue] = useState(0);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [animate, setAnimate] = useState(true);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');

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
        <div className={styles.keyword_title_y}>회원님의 관심사는 무엇인가요?</div>
        <div className={styles.keyword_caption_y}>관심 키워드를 분석해 알맞은 책을 추천해드려요</div>
        <div className={styles.bubble_chart_y}>
          {KEYWORD_Y.map((keyword, index) => (
            <div
              key={index}
              className={`${styles.bubble_item_y} ${animate ? styles.animate : ''}`}
              style={{
                position: 'absolute',
                top: keyword.top,
                left: keyword.left,
                width: keyword.size,
                height: keyword.size,
                background: keyword.color,
              }}
              onClick={() => handleKeywordClick(keyword.label)}
            >
              {keyword.label}
            </div>
          ))}
        </div>

        <div className={styles.refresh_wrapper_y}>
          <img src={refresh} alt="Refresh" />
          <div>키워드 바꾸기</div>
        </div>

        <div className={styles.selected_keyword_list_y}>
          {selectedKeywords.map((item, index) => (
            <div key={index} className={styles.keyword_item_y}>
              <div>{item}</div>
              <img
                src={cancel}
                alt="Remove"
                onClick={() => handleKeywordRemove(item)} // 클릭 시 키워드 제거
                style={{ cursor: 'pointer' }} // 커서 포인터 스타일 추가
              />
            </div>
          ))}
        </div>

        <div className={styles.select_box_wrapper_y}>
          <div className={styles.select_y}>
            <label htmlFor="gender">성별 선택</label>
            <select id="gender" value={selectedGender} onChange={handleGenderChange}>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
          </div>

          <div className={styles.select_y}>
            <label htmlFor="age">나이 선택</label>
            <select id="age" value={selectedAge} onChange={handleAgeChange}>
              <option value="10-19">10대</option>
              <option value="20-29">20대</option>
              <option value="30-39">30대</option>
            </select>
          </div>
        </div>

        <div className={styles.recommendation_y}>도서 추천받기</div>


      </TabPanel>
      <TabPanel value={value} index={1}>
        두 번째 아이템의 내용입니다.
      </TabPanel>
      <TabPanel value={value} index={2}>
        세 번째 아이템의 내용입니다.
      </TabPanel>
    </div>
  );
};

const KeywordB: React.FC = () => {
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

export default KeywordB;
