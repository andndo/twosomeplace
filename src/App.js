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
            <a>투썸플레이스 소개</a>
            <ul>
              <li>
                투썸플레이스
                <ul>
                  <li>비전체계</li>
                  <li>연혁</li>
                  <li>BI</li>
                  <li>20주년 이야기</li>
                  <li>Recruit</li>
                </ul>
              </li>
              <li>
                매장
                <ul>
                  <li>DT/DI</li>
                </ul>
              </li>
              <li>브랜드 브로슈어</li>
            </ul>
          </li>

          <li>
            <a>메뉴이야기</a>
            <ul>
              <li>커피이야기</li>
              <li>디저트이야기</li>
              <li>델리이야기</li>
            </ul>
          </li>
          <li>
            <a>브랜드 지원</a>
            <ul>
              <li>어썸 페어링 플랜트</li>
              <li>어썸 디저트 플랜트</li>
              <li>C&D센터</li>
              <li>SEP센터</li>
            </ul>
          </li>
          <li>
            <a>투썸플레이스 앱 & 멤버쉽</a>
            <ul>
              <li>투썸플레이스 앱 소개</li>
              <li>
                투썸플레이스 멤버쉽
                <ul>
                  <li>멤버쉽 소개</li>
                  <li>등급 및 혜택</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a>가맹점 창업안내</a>
            <ul>
              <li>가맹점 개설 안내</li>
              <li>창업설명회</li>
              <li>온라인 창업상담신청</li>
              <li>FAQ</li>
              <li>가맹점 전용 금융상품</li>
            </ul>
          </li>
          <li>
            <a>새소식 & 공지</a>
            <ul>
              <li>공지사항</li>
              <li>보도자료</li>
            </ul>
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
          <h1>FRANCHISE</h1>
        </S.franchisePage>
        <S.backImg
          src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220308_xgmVdukT"
          alt="배경1-2"
        />
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
