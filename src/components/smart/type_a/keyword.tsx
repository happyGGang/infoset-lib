import React, { useEffect, useState } from 'react';
import styles from './keyword.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { KEYWORD_X_A, KEYWORD_Y_A } from '../../../constants/smart.constants';
import refresh from '../../../assets/img/smart/type_a/refresh.svg';
import cancel from '../../../assets/img/smart/type_a/cancel.svg';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const HorizontalMode: React.FC = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [animate, setAnimate] = useState(true);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');

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

  const handleKeywordRemove = (keyword: string) => {
    setSelectedKeywords((prevSelected) => prevSelected.filter((k) => k !== keyword));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAge(event.target.value);
  };

  return (
    <div className={styles.container_x}>
      <div className={styles.bubble_chart_x}>
        {KEYWORD_X_A.map((keyword, index) => (
          <div
            key={index}
            className={`${styles.bubble_item_x} ${animate ? styles.animate : ''}`}
            style={{
              color: keyword.color,
              fontSize: keyword.size,
              position: 'absolute',
              top: keyword.top,
              left: keyword.left,
              border: selectedKeywords.includes(keyword.label)
                ? `1px solid ${keyword.color}`
                : 'none',
            }}
            onClick={() => handleKeywordClick(keyword.label)}
          >
            {keyword.label}
          </div>
        ))}
      </div>

      <div className={styles.refresh_wrapper_x}>
        <img src={refresh} alt="Refresh" />
        <div>키워드 바꾸기</div>
      </div>

      <div className={styles.selected_keyword_list_x}>
        {selectedKeywords.map((item, index) => (
          <div key={index} className={styles.keyword_item_x}>
            <div>{item}</div>
            <img src={cancel} alt="Remove" onClick={() => handleKeywordRemove(item)} />
          </div>
        ))}
      </div>

      <div className={styles.select_box_wrapper_x}>
        <div className={styles.select_x}>
          <label htmlFor="gender">성별</label>
          <select id="gender" value={selectedGender} onChange={handleGenderChange}>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </div>

        <div className={styles.select_x}>
          <label htmlFor="age">나이</label>
          <select id="age" value={selectedAge} onChange={handleAgeChange}>
            <option value="10-19">10대</option>
            <option value="20-29">20대</option>
            <option value="30-39">30대</option>
          </select>
        </div>

        <div className={styles.recommendation_x}>도서 추천받기</div>
      </div>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [animate, setAnimate] = useState(true);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedAge, setSelectedAge] = useState<string>('');

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

  const handleKeywordRemove = (keyword: string) => {
    setSelectedKeywords((prevSelected) => prevSelected.filter((k) => k !== keyword));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAge(event.target.value);
  };

  return (
    <div className={styles.container_y}>
      <div className={styles.bubble_chart_y}>
        {KEYWORD_Y_A.map((keyword, index) => (
          <div
            key={index}
            className={`${styles.bubble_item_y} ${animate ? styles.animate : ''}`}
            style={{
              color: keyword.color,
              fontSize: keyword.size,
              position: 'absolute',
              top: keyword.top,
              left: keyword.left,
              border: selectedKeywords.includes(keyword.label)
                ? `1px solid ${keyword.color}`
                : 'none',
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
          <label htmlFor="gender">성별</label>
          <select id="gender" value={selectedGender} onChange={handleGenderChange}>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>
        </div>

        <div className={styles.select_y}>
          <label htmlFor="age">나이</label>
          <select id="age" value={selectedAge} onChange={handleAgeChange}>
            <option value="10-19">10대</option>
            <option value="20-29">20대</option>
            <option value="30-39">30대</option>
          </select>
        </div>
      </div>

      <div className={styles.recommendation_y}>도서 추천받기</div>
    </div>
  );
};

const KeywordA: React.FC = () => {
  const [horizontalMode, setHorizontalMode] = useState(false);
  const { toggleFullPage } = useFullPageStore();
  const { toggleLandscape } = useOrientationStore();

  const handleClick = () => setHorizontalMode((prev) => !prev);

  function handleFullPage() {
    toggleFullPage();
    horizontalMode ? toggleLandscape(true) : toggleLandscape(false);
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

export default KeywordA;
