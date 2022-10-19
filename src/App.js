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
  const [bodo, setBodo] = useState(true);
  const [gongy, setGongy] = useState(false);
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
  const selectBodo = () => {
    document.getElementById("Bodo").style.textDecoration = "underline";
    document.getElementById("Bodo").style.color = "red";
  };
  const selectGongy = () => {
    document.getElementById("Gongy").style.textDecoration = "underline";
    document.getElementById("Gongy").style.color = "red";
  };
  const notBodo = () => {
    document.getElementById("Bodo").style.textDecoration = "none";
    document.getElementById("Bodo").style.color = "black";
  };
  const notGongy = () => {
    document.getElementById("Gongy").style.textDecoration = "none";
    document.getElementById("Gongy").style.color = "black";
  };
  const coffeeSlides = [
    "https://www.twosome.co.kr/resources/images/main/menu_coffee1.jpg",
    "https://www.twosome.co.kr/resources/images/main/menu_coffee2.jpg",
    "https://www.twosome.co.kr/resources/images/main/menu_coffee3.jpg",
    "https://www.twosome.co.kr/resources/images/main/menu_coffee4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
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
            <>투썸플레이스 소개</>
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
            <>메뉴이야기</>
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
            <>브랜드 지원</>
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
            <>투썸플레이스 앱 & 멤버쉽</>
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
            <>가맹점 창업</>
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
            <>새소식 & 공지</>
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
          <S.swiperDiv>
            <div className="controlImg">
              <S.rightBtn onClick={onClickLeft}>
                <img
                  src="https://www.twosome.co.kr/resources/images/main/ico_arrow_left.svg"
                  alt=""
                  className="directionKey"
                />
              </S.rightBtn>
              {pagenumberX}/2
              <S.rightBtn onClick={onClickRight}>
                <img
                  src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
                  alt=""
                  className="directionKey"
                />
              </S.rightBtn>
            </div>
          </S.swiperDiv>
        </S.firstMainImg>
        <S.MenuStoryPage>
          <S.MenuStoryMainDiv>
            <h1>MENU STORY</h1>
            <div className="red-point"></div>
            <ul>
              <li>
                <p>전문가의 섬세함으로 완성한 최상의 커피</p>
                <a>COFFEE STORY</a>
              </li>
              <li>
                <p>다양한 프리미엄 케이크 & 디저트</p>
                <a>DESSERT STORY</a>
              </li>
              <li>
                <p>가볍게 즐기는 맛있는 식사, 델리</p>
                <a>DELI STORY</a>
              </li>
            </ul>
            {/* <S.swiperDiv>
            <div className="controlImg">
              <S.rightBtn onClick={onClickLeft}>
                <img
                  src="https://www.twosome.co.kr/resources/images/main/ico_arrow_left.svg"
                  alt=""
                  className="directionKey"
                />
              </S.rightBtn>
              {pagenumberX}/2
              <S.rightBtn onClick={onClickRight}>
                <img
                  src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
                  alt=""
                  className="directionKey"
                />
              </S.rightBtn>
            </div>
          </S.swiperDiv> */}
          </S.MenuStoryMainDiv>
        </S.MenuStoryPage>

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
        <div className="inner bg-blue">5</div>
        <S.newsPage>
          <S.newsMainDiv>
            <S.newsH1>
              <h1>
                NEWS
                <br />
                &NOTICE<div className="red-point"></div>
              </h1>
            </S.newsH1>
            <S.aContainer>
              <a
                href="#"
                id="Bodo"
                onClick={() => {
                  setBodo(true);
                  setGongy(false);
                }}
                selectBodo={selectBodo}
                notGongy={notGongy}
              >
                보도자료
              </a>
              <a
                href="#"
                id="Gongy"
                onClick={() => {
                  setBodo(false);
                  setGongy(true);
                }}
                selectGongy={selectGongy}
                notBodo={notBodo}
              >
                공지사항
              </a>
            </S.aContainer>
            <img src="https://www.twosome.co.kr/resources/images/main/main_news_illust.svg" />
            <S.gongydiv>jeifjif</S.gongydiv>
          </S.newsMainDiv>
        </S.newsPage>
        <S.endInner>
          <S.endContainer>
            <ul>
              <li>
                <a href="https://www.twosome.co.kr/cp/bulkOrderinquiry.do">
                  기업 및 단체구매안내
                </a>
              </li>
              <li>
                <a href="https://www.twosome.co.kr/so/storeStartupCounselApply.do">
                  가맹상담신청
                </a>
              </li>
              <li>
                <a href="https://www.twosome.co.kr/cp/cyberInformInfo.do">
                  사이버신문고
                </a>
              </li>
            </ul>
            <S.endRightDiv>
              <h3>Adress</h3>
              <p>
                서울특별시 중구 을지로 170, 8층(을지로4가,
                을지트윈타워)투썸플레이스(주)
              </p>
              <h3>Costmor Center</h3>
              <p>고객센터 : 1577-4410ㅤㅤㅤㅤ팩스 : 02-2058-6777</p>
            </S.endRightDiv>
            <br />
            <hr />
            <S.endBottomDiv>
              <div>
                <a>이용약관</a>
              </div>
              <div className="yellow">
                <a>개인정보처리방침</a>
              </div>
              <div>
                <a>위치기반서비스 이용약관</a>
              </div>
              <div>
                <a>이메일 무단수집거부</a>
              </div>
              <div>
                <a>법적고지</a>
              </div>
              <div>
                <a>사업자정보확인</a>
              </div>
              <S.footerNav>
                <p>
                  대표이사 : 이영상 | 개인정보보호책임자 : 장재호 |
                  사업자등록번호 : 404-86-01054
                </p>
                <p>
                  통신판매업종신고증 : 제 2018-서울중구-0353호 | 대표이메일 :
                  helpmaster@twosome.co.kr
                </p>
                <p>
                  Copyright ⓒ 2021 A TWOSOME PLACE Co., LTD. All Rights
                  Reserved.
                </p>
              </S.footerNav>
              <S.imgContainer>
                <img src="https://www.twosome.co.kr/resources/images/icon/ico_32_facebook.svg" />
                <img src="https://www.twosome.co.kr/resources/images/icon/ico_32_instagram.svg" />
                <img src="https://www.twosome.co.kr/resources/images/icon/ico_32_youtube.svg" />
              </S.imgContainer>
            </S.endBottomDiv>
          </S.endContainer>
        </S.endInner>
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
