import React from "react";
//import Earth from "./components/earth";
import * as S from "./style";
import "./App.css";
import { useRef, useEffect, useState } from "react";
import all from "gsap/all";

function App() {
  const [number, setNumber] = useState(10);
  const [pagenumberX, setPageNumberX] = useState(1);
  const [opacityNum, setOpacityNum] = useState(1);
  const [pagenum, setPagenum] = useState("01");
  const outerDivRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      // console.log(scrollTop, pageHeight);
      console.log(number);

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop + 1 < pageHeight) {
          console.log("1");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("02");
          setNumber(20);
          setOpacityNum(0);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("2"); //2341.25 1171
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("03");
          setNumber(30);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("3"); //2341.25 1171
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("04");
          setNumber(40);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          console.log("4");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("05");
          setNumber(50);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          console.log("5");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("06");
          setNumber(60);
        } else {
          console.log("6");
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + pageHeight / 1.7,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollTop >= 0 && scrollTop <= pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("01");
          setNumber(10);
          setOpacityNum(1);
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("02");
          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("03");
          setNumber(30);
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("04");
          setNumber(40);
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("05");
          setNumber(50);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("06");
          setNumber(60);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  const onClickLeft = () => {
    setPageNumberX(pagenumberX === 2 ? 1 : 2);
    console.log(opacityNum);
  };
  const onClickRight = () => {
    setPageNumberX(pagenumberX === 1 ? 2 : 1);
    console.log(opacityNum);
  };
  const onClickUp = () => {
    outerDivRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setNumber(10);
  };
  return (
    <>
      <S.header>
        <ul
          style={
            number > 10
              ? { color: "#000", transition: ".9s all" }
              : { color: "#fff" }
          }
        >
          <img
            src="https://www.twosome.co.kr/resources/images/common/logo_white.svg"
            className="twosomeWhite"
            alt=""
            style={
              number > 10
                ? { opacity: 0, transition: ".9s all" }
                : { opacity: 1 }
            }
          />
          <img
            src="https://www.twosome.co.kr/resources/images/common/logo_black.svg"
            className="twosomeBlack"
            alt=""
            style={
              number > 10
                ? { opacity: 1, transition: ".9s all" }
                : { opacity: 0 }
            }
          />
          <li>
            <S.headerItemName>투썸플레이스 소개</S.headerItemName>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>투썸플레이스</h4>
                    <ul>
                      <li>비전체계</li>
                      <li>연혁</li>
                      <li>BI</li>
                      <li>20주년 이야기</li>
                      <li>Recruit</li>
                    </ul>
                  </li>
                  <li>
                    <h4>매장</h4>
                    <ul>
                      <li>DY/DI</li>
                    </ul>
                  </li>
                  <li>
                    <h4>브랜드 브로슈어</h4>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <S.headerItemName>메뉴이야기</S.headerItemName>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>커피이야기</h4>
                  </li>
                  <li>
                    <h4>디저트이야기</h4>
                  </li>
                  <li>
                    <h4>델리이야기</h4>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <S.headerItemName>브랜드 지원</S.headerItemName>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>어썸 페어링 플랜트</h4>
                  </li>
                  <li>
                    <h4>어썸 디저트 플랜트</h4>
                  </li>
                  <li>
                    <h4>C&D센터</h4>
                  </li>
                  <li>
                    <h4>SEP센터</h4>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <S.headerItemName>투썸플레이스 앱 & 멤버쉽</S.headerItemName>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>투썸플레이스 앱 소개</h4>
                  </li>
                  <li>
                    <h4>투썸플레이스 멤버쉽</h4>
                    <ul>
                      <li>멤버쉽 소개</li>
                      <li>등급 및 혜택</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <S.headerItemName>가맹점 창업</S.headerItemName>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>가맹점 개설 안내</h4>
                  </li>
                  <li>
                    <h4>창업설명회</h4>
                  </li>
                  <li>
                    <h4>온라인 창업상담신청</h4>
                  </li>
                  <li>
                    <h4>FAQ</h4>
                  </li>
                  <li>
                    <h4>가맹점 전용 금융상품</h4>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <S.headerItemName>새소식 & 공지</S.headerItemName>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>새소식</h4>
                  </li>
                  <li>
                    <h4>공지</h4>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <div>
            <li>
              <img
                src="https://www.twosome.co.kr/resources/images/icon/ico_24_allmenu_white.svg"
                className="cubeWhie"
                alt=""
                style={
                  number > 10
                    ? { opacity: 0, transition: ".9s all" }
                    : { opacity: 1 }
                }
              />
              <img
                src="https://www.twosome.co.kr/resources/images/icon/ico_24_allmenu_black.svg"
                className="cubeBlack"
                alt=""
                style={
                  number > 10
                    ? { opacity: 1, transition: ".9s all" }
                    : { opacity: 0 }
                }
              />
            </li>
          </div>
        </ul>
      </S.header>
      <S.btnContainer>
        <S.buyingBtn>
          <p>기업 단체 구매</p>
          <div></div>
        </S.buyingBtn>

        {number > 10 ? <S.upBtn onClick={onClickUp}>1</S.upBtn> : <></>}
      </S.btnContainer>
      <div className="progress-div">
        {pagenum}
        <progress value={number} max="60" class="bar"></progress>
        06
      </div>
      <S.swiperDiv style={{ opacity: opacityNum }}>
        <div className="controlImg">
          <S.rightBtn onClick={onClickLeft}>
            <img
              src="https://www.twosome.co.kr/resources/images/main/ico_arrow_left.svg"
              alt=""
            />
          </S.rightBtn>
          {pagenumberX}/2
          <S.rightBtn onClick={onClickRight}>
            <img
              src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
              alt=""
            />
          </S.rightBtn>
        </div>
      </S.swiperDiv>
      <S.mainDiv ref={outerDivRef}>
        <S.firstMainImg ref={imgRef}>
          <S.slideImg
            style={
              pagenumberX === 2
                ? { transform: "translateX(-100%)", transition: ".99s all" }
                : { transform: "translate(0, 0)", transition: ".99s all" }
            }
          >
            <img
              src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220407_xYuWGMXB"
              alt=""
            />
          </S.slideImg>
          <S.slideImg
            style={
              pagenumberX === 1
                ? { transform: "translateX(100%)", transition: ".99s all" }
                : { transform: "translate(0, 0)", transition: ".99s all" }
            }
          >
            <img
              src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220308_xgmVdukT"
              alt=""
            />
          </S.slideImg>
        </S.firstMainImg>

        <S.A_list_img>
          <div className="A-list">
            <h1>
              에이리스트<div className="red-point"></div>
            </h1>
            <h2>
              TWOSOME
              <br />
              IN YOUR MUG, A LIST
            </h2>
            <h3>언제 어디서나 여유롭게 즐기는 에이리스트</h3>
            <p>
              좋은 커피를 마셔야 비로소 하루가 시작되는 느낌이라면 하루에도 몇
              <br />
              번씩 그윽한 커피 향이 생각난다면 마음속 우선순위에 언제나 커피가
              <br />
              있는 당신이라면 잊지 말고 챙겨야 할 단 하나의 리스트, 투썸플레이스
              <br />
              에이리스트.
            </p>
          </div>
        </S.A_list_img>

        <S.franchisePage>
          <S.franchiseBackground>
            <img
              src="https://www.twosome.co.kr/resources/images/content/img_store_01@3x.png"
              alt=""
              className="circleimg1"
            />
            <img
              src="https://www.twosome.co.kr/resources/images/content/img_store_02@3x.png"
              alt=""
              className="circleimg2"
            />
            <img
              src="https://www.twosome.co.kr/resources/images/content/img_store_03@3x.png"
              alt=""
              className="circleimg3"
            />
            <img
              src="https://www.twosome.co.kr/resources/images/content/img_store_04@3x.png"
              alt=""
              className="circleimg4"
            />
            <img
              src="https://www.twosome.co.kr/resources/images/content/img_store_05@3x.png"
              alt=""
              className="circleimg5"
            />
          </S.franchiseBackground>

          <S.franchiseMainDiv>
            <h1>
              FRANCHISE<div className="red-point"></div>
            </h1>
            <h3>
              당신의 창업 성공 스토리,
              <br /> 투썸플레이스가 함께합니다.
            </h3>
            <p>
              향기로운 커피와 달콤한 디저트가 함께하는 프리미엄 디저트 <br />
              카페 투썸플레이스. 투썸플레이스의 축적된 경험과 노하우를 <br />
              바탕으로 여러분의 성공창업을 약속 드립니다.
            </p>
            <S.franchiseBtnContainer>
              <button class="custom-btn">
                창업안내 바로가기ㅤ
                <img
                  className="arrow"
                  src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
                  alt=""
                />
              </button>

              <div>ㅤㅤ</div>

              <button class="custom-btn">
                가맹상담 신청ㅤ
                <img
                  className="arrow"
                  src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
                  alt=""
                />
              </button>
            </S.franchiseBtnContainer>
          </S.franchiseMainDiv>
        </S.franchisePage>
        <div className="inner bg-pink">6</div>
        <div className="inner bg-blue">5</div>
        <div className="inner bg-pink">6</div>
        <S.endInner>hello</S.endInner>
      </S.mainDiv>
    </>
  );
}
//{
/* <S.backImg
src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220308_xgmVdukT"
alt="배경1-2"
/>

<img src="/resources/images/content/img_p_coffeestory.jpg" alt="커피 사진"></img> 
<S.backImg src="https://www.twosome.co.kr/resources/images/main/main_alist_pc.jpg" />

<S.backImg
src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220308_xgmVdukT"
alt="배경1-2"
/> */
//}

export default App;
