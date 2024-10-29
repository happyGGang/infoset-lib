import React, { useState } from 'react';
import styles from './book_information.module.css';
import Tilt from '../../tilt';
import Full from '../../full_screen';
import { Pagination } from 'swiper/modules';
import { BOOK_INFORMATION } from '../../../constants/kiosk.constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import close from '../../../assets/img/kiosk/type_a/close.svg';

const HorizontalMode: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className={styles.popup_x}>
          <div onClick={() => setIsOpen(false)} className={styles.close_x}>
            <img src={close} alt="" />
            <div>닫기</div>
          </div>
        </div>
      ) : (
        <div className={styles.container_x}>
          <div className={styles.selected_book_x}>
            <img src={BOOK_INFORMATION[selectedItem].img} alt="" />
            <div className={styles.badge_x}>
              대출
              <br />
              가능
            </div>
          </div>

          <div>
            <div className={styles.btn_x} onClick={() => setIsOpen(true)}>
              소장도서 서가위치보기
            </div>
            <div className={styles.scroll_x}>
              〈여신강림〉(2020), 〈사랑의 이해〉(2023)로 전 세계 팬들의 이목을 사로잡은 배우
              문가영의 첫 번째 산문집이 출간되었다. 18년간 다양한 배역을 소화하면서도 자신만의
              무드로 매 작품마다 뚜렷한 인상을 남겼던 그녀가 이제는 ‘작가 문가영’으로서 대중들 앞에
              나섰다. 깊이 있는 사유를 켜켜이 쌓아 자신과 자신을 둘러싼 세상을 치열하게 마주하고자
              하는 문가영의 내밀한 언어들이 이 책에 담겼다. 인터뷰마다 긴 시간 동안 촘촘히 생각을
              다듬어 온 사람 특유의 단단한 내공을 보여주었던 그녀를 이미 알아본 이들이라면 이번 출간
              소식이 더없이 반가울 것이다. 독일에서 보낸 유년 시절과 어렸을 때부터 지속된 독서 습관,
              고전문학에 대한 남다른 애정을 가진 그녀는 ‘파타’라는 새로운 얼굴을 통해 그녀이면서,
              그녀가 아닌 이야기들을 풀어놓는다. 1부 ‘존재의 기록’에서는 지극히 일상적인 사건들을
              통해 삶에 끊임없이 질문을 던지고 있는데, 이는 결국 진실된 자신을 마주하기 위한 치열한
              자기 탐구의 과정으로 이어진다. 2부 ‘생각의 기록’은 배우 문가영의 보다 솔직한 욕망이
              드러나는 부분으로, 질주하는 단상들 사이에서 자신과 바깥을 향한 예리하면서도 깊이 있는
              시각이 돋보인다. 부록으로는 1부, 2부의 에피소드와 연결되는 실제 문가영의 아버지가 쓴
              육아일기를 발췌해 넣었다. 흩어진 에피소드들이 어느 순간 유기적으로 연결되어 있음을
              깨달을 때나, 암시적인 대화 속 한 겹 숨겨둔 파타의 메시지를 발견하게 될 때면 펼친 책을
              쉽게 덮을 수 없을 것이다. 사사로운 감정에 ‘잡아먹히지’ 않도록, 두 눈을 형형하게 뜬 채
              진실을 좇아 세상을 응시하는 문가영, 아니 파타의 시선을 따라가 보자.
            </div>
          </div>

          <Swiper
            loop
            direction={'vertical'}
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={180}
            className={styles.swiper_x}
          >
            {BOOK_INFORMATION.map((item, index) => (
              <SwiperSlide key={item.id} style={{ height: '0.2rem' }}>
                <div onClick={() => setSelectedItem(item.id)}>
                  <img src={item.img} alt="" className={styles.img_x} />
                  <div className={styles.title_x}>{item.title}</div>
                  <div className={styles.writer_x}>{item.writer}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

const VerticalMode: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <div className={styles.popup_y}>
          <div onClick={() => setIsOpen(false)} className={styles.close_y}>
            <img src={close} alt="" />
            <div>닫기</div>
          </div>
        </div>
      ) : (
        <div className={styles.container_y}>
          <div className={styles.selected_book_y}>
            <img src={BOOK_INFORMATION[selectedItem].img} alt="" />
            <div className={styles.badge_y}>
              대출
              <br />
              가능
            </div>
            <div className={styles.btn_y} onClick={() => setIsOpen(true)}>
              소장도서 서가위치보기
            </div>
          </div>

          <div className={styles.scroll_y}>
            〈여신강림〉(2020), 〈사랑의 이해〉(2023)로 전 세계 팬들의 이목을 사로잡은 배우 문가영의
            첫 번째 산문집이 출간되었다. 18년간 다양한 배역을 소화하면서도 자신만의 무드로 매
            작품마다 뚜렷한 인상을 남겼던 그녀가 이제는 ‘작가 문가영’으로서 대중들 앞에 나섰다. 깊이
            있는 사유를 켜켜이 쌓아 자신과 자신을 둘러싼 세상을 치열하게 마주하고자 하는 문가영의
            내밀한 언어들이 이 책에 담겼다. 인터뷰마다 긴 시간 동안 촘촘히 생각을 다듬어 온 사람
            특유의 단단한 내공을 보여주었던 그녀를 이미 알아본 이들이라면 이번 출간 소식이 더없이
            반가울 것이다.
          </div>

          <Swiper
            loop
            slidesPerView={6}
            slidesPerGroup={6}
            spaceBetween={12.5}
            className={styles.swiper_y}
          >
            {BOOK_INFORMATION.map((item, index) => (
              <SwiperSlide
                key={item.id}
                style={{ width: '2.63581rem !important', height: '4.87939rem' }}
              >
                <div onClick={() => setSelectedItem(item.id)}>
                  <img src={item.img} alt="" className={styles.img_y} />
                  <div className={styles.title_y}>{item.title}</div>
                  <div className={styles.writer_y}>{item.writer}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

const BookInformationB = () => {
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

export default BookInformationB;
