import React, { useState } from 'react';
import styles from './course_registration.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import checked from '../../../assets/img/kiosk/type_a/check.svg';
import unChecked from '../../../assets/img/kiosk/type_a/unChecked.svg';
import { useFullPageStore } from '../../../store/full_page.store';
import { useOrientationStore } from '../../../store/landscape.store';

const HorizontalMode: React.FC = () => {
  const [gender, setGender] = useState('man');
  const [year, setYear] = useState('2000');
  const [month, setMonth] = useState('1');
  const [day, setDay] = useState('1');
  const [smsConsent, setSmsConsent] = useState(true);
  const [pictureConsent, setPictureConsent] = useState(true);

  const years = Array.from({ length: 100 }, (_, i) => 2023 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className={styles.container_x}>
      <div className={styles.content_x}>
        <div className={styles.form_title_x}>신청자정보</div>
        <div className={styles.scroll}>
          <div className={styles.content_wrapper_x}>
            <div>
              <div className={styles.label_x}>성명</div>
              <input type="text" placeholder="성명을 입력해주세요" className={styles.input_x} />

              <div className={styles.label_x}>생년월일</div>
              <div className={styles.birthdate_wrapper_x}>
                <select
                  className={styles.select_x}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <div className={styles.divider_x}>-</div>
                <select
                  className={styles.select_x}
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  {months.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <div className={styles.divider_x}>-</div>
                <select
                  className={styles.select_x}
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                >
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <div className={styles.label_x}>성별</div>
              <div className={styles.btn_wrapper_x}>
                <div
                  className={`${styles.btn_x} ${gender === 'man' ? styles.active_x : ''}`}
                  onClick={() => setGender('man')}
                >
                  남
                </div>
                <div
                  className={`${styles.btn_x} ${gender === 'woman' ? styles.active_x : ''}`}
                  onClick={() => setGender('woman')}
                >
                  여
                </div>
              </div>
              <div className={styles.label_x}>휴대전화번호</div>
              <div className={styles.phone_wrapper_x}>
                <input type="number" placeholder="010" className={styles.phone_x} />
                <div className={styles.divider_y}>-</div>
                <input type="number" placeholder="0000" className={styles.phone_x} />
                <div className={styles.divider_y}>-</div>
                <input type="number" placeholder="0000" className={styles.phone_x} />
              </div>
            </div>
          </div>

          <div className={styles.label_x} style={{ marginTop: '0.78rem', marginLeft: '3.5rem' }}>
            SMS 수신 동의 여부
            <div className={styles.radio_wrapper_x} onClick={() => setSmsConsent(true)}>
              <img src={smsConsent ? checked : unChecked} alt="동의" />
              동의
            </div>
            <div className={styles.radio_wrapper_x} onClick={() => setSmsConsent(false)}>
              <img src={!smsConsent ? checked : unChecked} alt="미동의" />
              미동의
            </div>
          </div>

          <div className={styles.caption_x}>
            · 활용목적 : 도서관 강좌 및 각종행사 안내
            <br />· 미동의 하여도 수강신청에 제한이 없음(단, 미동의할 경우 해당 강좌에 대한 안내를
            받을 수 없음)
          </div>

          <div className={styles.label_x} style={{ marginTop: '0.78rem', marginLeft: '3.5rem' }}>
            사진촬영 동의 여부
            <div className={styles.radio_wrapper_x} onClick={() => setPictureConsent(true)}>
              <img
                src={pictureConsent ? checked : unChecked}
                alt="동의"
                style={{ marginLeft: '0.35rem' }}
              />
              동의
            </div>
            <div className={styles.radio_wrapper_x} onClick={() => setPictureConsent(false)}>
              <img src={!pictureConsent ? checked : unChecked} alt="미동의" />
              미동의
            </div>
          </div>

          <div className={styles.caption_x}>
            · 활용목적 : 도서관 프로그램 홍보
            <br /> · 프로그램 진행 시간 동안 참여자 대상 사진 및 사진 촬영, 인터뷰 요청 등<br /> ·
            모든 촬영은 프로그램 진행이나 활동에 전혀 영향을 주지 않는 선에서 진행
          </div>

          <div className={styles.label_x} style={{ marginLeft: '2.93rem', marginTop: '0.88rem' }}>
            비밀번호
          </div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className={styles.password}
          />
        </div>
      </div>
    </div>
  );
};

const VerticalMode: React.FC = () => {
  const [gender, setGender] = useState('man');
  const [year, setYear] = useState('2000');
  const [month, setMonth] = useState('1');
  const [day, setDay] = useState('1');
  const [smsConsent, setSmsConsent] = useState(true);
  const [pictureConsent, setPictureConsent] = useState(true);

  const years = Array.from({ length: 100 }, (_, i) => 2023 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className={styles.container_y}>
      <div className={styles.content_y}>
        <div className={styles.form_title_y}>신청자정보</div>
        <div className={styles.label_y}>성명</div>
        <input type="text" placeholder="성명을 입력해주세요" className={styles.input_y} />

        <div className={styles.label_y}>성별</div>
        <div className={styles.btn_wrapper_y}>
          <div
            className={`${styles.btn_y} ${gender === 'man' ? styles.active_y : ''}`}
            onClick={() => setGender('man')}
          >
            남
          </div>
          <div
            className={`${styles.btn_y} ${gender === 'woman' ? styles.active_y : ''}`}
            onClick={() => setGender('woman')}
          >
            여
          </div>
        </div>

        <div className={styles.label_y}>생년월일</div>
        <div className={styles.birthdate_wrapper_y}>
          <select
            className={styles.select_y}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <div className={styles.divider_y}>-</div>
          <select
            className={styles.select_y}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <div className={styles.divider_y}>-</div>
          <select className={styles.select_y} value={day} onChange={(e) => setDay(e.target.value)}>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.label_y}>휴대전화번호</div>
        <div className={styles.phone_wrapper_y}>
          <input type="number" placeholder="010" className={styles.phone_y} />
          <div className={styles.divider_y}>-</div>
          <input type="number" placeholder="0000" className={styles.phone_y} />
          <div className={styles.divider_y}>-</div>
          <input type="number" placeholder="0000" className={styles.phone_y} />
        </div>

        <div className={styles.label_y}>
          SMS 수신 동의 여부
          <div className={styles.radio_wrapper_y} onClick={() => setSmsConsent(true)}>
            <img src={smsConsent ? checked : unChecked} alt="동의" />
            동의
          </div>
          <div className={styles.radio_wrapper_y} onClick={() => setSmsConsent(false)}>
            <img src={!smsConsent ? checked : unChecked} alt="미동의" />
            미동의
          </div>
        </div>

        <div className={styles.caption_y}>
          · 활용목적 : 도서관 강좌 및 각종행사 안내
          <br />· 미동의 하여도 수강신청에 제한이 없음(단, 미동의할 경우 해당 강좌에 대한 안내를
          받을 수 없음)
        </div>

        <div className={styles.label_y}>
          사진촬영 동의 여부
          <div className={styles.radio_wrapper_y} onClick={() => setPictureConsent(true)}>
            <img
              src={pictureConsent ? checked : unChecked}
              alt="동의"
              style={{ marginLeft: '0.35rem' }}
            />
            동의
          </div>
          <div className={styles.radio_wrapper_y} onClick={() => setPictureConsent(false)}>
            <img src={!pictureConsent ? checked : unChecked} alt="미동의" />
            미동의
          </div>
        </div>

        <div className={styles.caption_y}>
          · 활용목적 : 도서관 프로그램 홍보
          <br /> · 프로그램 진행 시간 동안 참여자 대상 사진 및 사진 촬영, 인터뷰 요청 등<br /> ·
          모든 촬영은 프로그램 진행이나 활동에 전혀 영향을 주지 않는 선에서 진행
        </div>

        <div className={styles.label_y}>비밀번호</div>
        <input type="password" placeholder="비밀번호를 입력해주세요" className={styles.input_y} />
      </div>
    </div>
  );
};

const CourseRegistrationB = () => {
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

export default CourseRegistrationB;
