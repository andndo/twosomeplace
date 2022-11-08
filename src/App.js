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
    "https://www.twosome.co.kr/resources/images/main/menu_coffee2.jpg",
    "https://www.twosome.co.kr/resources/images/main/menu_coffee3.jpg",
    "https://www.twosome.co.kr/resources/images/main/menu_coffee4.jpg",
    "https://www.twosome.co.kr/resources/images/main/menu_coffee1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const coffeeName = [
    "롱블랙",
    "TWG 1837 블랙티",
    "스트로베리 피치 프라페",
    "스페니쉬 연유라떼",
  ];
  const a = 1;
  const coffeeCurrentList = coffeeSlides.map((list, index) =>
    index === currentIndex ? (
      <S.currentImg src={coffeeSlides[currentIndex]} />
    ) : (
      <></>
    )
  );
  const coffeeList = coffeeSlides.map((list, index) =>
    index === currentIndex ? <></> : <S.otherImg src={list} />
  );
  const coffeeNameList = coffeeName.map((list, index) => (
    <div>{index === currentIndex ? list : ""}</div>
  ));
  const onClickMenuRight = () => {
    if (currentIndex >= 3) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  };
  const onClickMenuLeft = () => {
    if (currentIndex <= 0) setCurrentIndex(3);
    else setCurrentIndex(currentIndex - 1);
  };

  const endInnerImg = [
    "https://www.twosome.co.kr/resources/images/icon/ico_32_facebook.svg",
    "https://www.twosome.co.kr/resources/images/icon/ico_32_instagram.svg",
    "https://www.twosome.co.kr/resources/images/icon/ico_32_youtube.svg",
  ];
  const endInnerImgList = endInnerImg.map((list) => <img src={list} />);
  const endInnerDivA = [
    "이용약관",
    "개인정보처리방침",
    "위치기반서비스 이용약관",
    "이메일 무단수집거부",
    "법적고지",
    "사업자정보확인",
  ];
  const endInnerDivAList = endInnerDivA.map((list, index) =>
    index === 1 ? (
      <div className="yellow">
        <a>{list}</a>
      </div>
    ) : (
      <div>
        <a>{list}</a>
      </div>
    )
  );
  const franchiseImg = [
    "https://www.twosome.co.kr/resources/images/content/img_store_01@3x.png",
    "https://www.twosome.co.kr/resources/images/content/img_store_02@3x.png",
    "https://www.twosome.co.kr/resources/images/content/img_store_03@3x.png",
    "https://www.twosome.co.kr/resources/images/content/img_store_04@3x.png",
    "https://www.twosome.co.kr/resources/images/content/img_store_05@3x.png",
  ];
  const franchiseImgList = franchiseImg.map((list, index) => (
    <img
      style={{
        marginTop: `${
          parseInt(`${index <= 2 ? 0 : 80}`) +
          (index % 3) * 160 +
          ((index % 3) + 1) * 130
        }px`,
      }}
      src={list}
      alt=""
    />
  ));
  const footerNavContent = [
    " 대표이사 : 이영상 | 개인정보보호책임자 : 장재호 | 사업자등록번호 : 404-86-01054",
    "통신판매업종신고증 : 제 2018-서울중구-0353호 | 대표이메일 : helpmaster@twosome.co.kr",
    "Copyright ⓒ 2021 A TWOSOME PLACE Co., LTD. All Rights Reserved.",
  ];
  const footerNavList = footerNavContent.map((list) => <p>{list}</p>);
  const bodoA = [
    "개인정보처리방침 개정 안내",
    "위치기반서비스 이용약관 개정 안내",
    "개인정보처리방침 개정 안내",
  ];
  const bodoP = ["2022-10-07", "2022-09-07", "2022-09-07"];
  const bodoList = bodoA.map((list, index) => (
    <nav>
      <div>
        <h3>공지사항</h3>
        <a>{list}</a>
        <p>{bodoP[index]}</p>
      </div>
    </nav>
  ));
  const [MenuClickNum, setMenuClickNum] = useState(0);
  const MenuOnClick = (event) => {
    event.key === "1" ? (
      <S.MenuStroyClickDiv>
        <p>asdf</p>
        <a>fweaawe</a>
      </S.MenuStroyClickDiv>
    ) : (
      <S.MenuStroyNoneClickDiv>
        <a>afsdew</a>
      </S.MenuStroyNoneClickDiv>
    );
  };
  const introduceTwosome = [
    "비전체계",
    "연혁",
    "BI",
    "20주년 이야기",
    "Recruit",
  ];
  const introduceTwosomeList = introduceTwosome.map((list) => <li>{list}</li>);
  const MenuStoryHeader = ["커피이야기", "디저트이야기", "델리이야기"];
  const MenuStoryHeaderList = MenuStoryHeader.map((list) => (
    <li>
      <h4>{list}</h4>
    </li>
  ));
  const BrandSupportHeader = [
    "어썸 페어링 플랜트",
    "어썸 디저트 플랜트",
    "C&D센터",
    "SEP센터",
  ];
  const BrandSupportHeaderList = BrandSupportHeader.map((list) => {
    <li>
      <h4>{list}</h4>
    </li>;
  });
  const endInnerContentAdress = [
    "https://www.twosome.co.kr/cp/bulkOrderinquiry.do",
    "https://www.twosome.co.kr/so/storeStartupCounselApply.do",
    "https://www.twosome.co.kr/cp/cyberInformInfo.do",
  ];
  const endInnerContent = [
    "기업 및 단체구매안내",
    "가맹상담신청",
    "사이버 신문고",
  ];
  const endInnerList = endInnerContent.map((list, index) => (
    <li>
      <a href={endInnerContentAdress[index]}>{list}</a>
    </li>
  ));
  return (
    <>
      <S.HeaderMain>
        <ul>
          <li>
            <nav className="twosomeImg">
              <img src="https://www.twosome.co.kr/resources/images/common/logo_white.svg" />
            </nav>
          </li>
          <li>
            <nav className="text">투썸플레이스 소개</nav>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">
                  <li>
                    <h4>투썸플레이스</h4>
                    <ul>{introduceTwosomeList}</ul>
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
            <nav className="text">메뉴이야기</nav>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">{MenuStoryHeaderList}</ul>
              </div>
            </div>
          </li>

          <li>
            <nav className="text">브랜드 지원</nav>
            <div class="item__contents">
              <div class="contents__menu">
                <ul class="inner">{BrandSupportHeaderList}</ul>
              </div>
            </div>
          </li>
          <li>
            <nav className="text">투썸플레이스 앱 & 멤버쉽</nav>
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
            <nav className="text">가맹점 창업</nav>
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
            <nav className="text">새소식 & 공지</nav>
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
          <li>
            <nav className="cubeImg">
              <img src="https://www.twosome.co.kr/resources/images/icon/ico_24_allmenu_white.svg" />
            </nav>
          </li>
        </ul>
      </S.HeaderMain>
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
          <S.MenuContainer>
            <S.MenuImgContainer>
              <div>{coffeeCurrentList}</div>
              <S.otherImgContainer>
                <div>{coffeeList}</div>
              </S.otherImgContainer>
            </S.MenuImgContainer>
            <S.swiperDiv2>
              <div className="controlImg">
                <S.leftBtn onClick={onClickMenuLeft}>
                  <img
                    src="https://www.twosome.co.kr/resources/images/main/ico_arrow_left.svg"
                    alt=""
                    className="directionKey"
                  />
                </S.leftBtn>
                <S.coffeeNameBox>
                  <nav>{coffeeNameList}</nav>
                </S.coffeeNameBox>
                <S.rightBtn2 onClick={onClickMenuRight}>
                  <img
                    src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
                    alt=""
                    className="directionKey"
                  />
                </S.rightBtn2>
              </div>
            </S.swiperDiv2>
          </S.MenuContainer>
          <S.MenuStoryMainDiv>
            <h1>MENU STORY</h1>
            <div className="red-point"></div>
            <nav>
              <div onClick={MenuOnClick} key="1">
                <p>전문가의 섬세함으로 완성한 최상의 커피</p>
                <a>COFFEE STORY</a>
              </div>
              <div onClick={MenuOnClick} key="2">
                <p>다양한 프리미엄 케이크 & 디저트</p>
                <a>DESSERT STORY</a>
              </div>
              <div onClick={MenuOnClick} key="3">
                <p>가볍게 즐기는 맛있는 식사, 델리</p>
                <a>DELI STORY</a>
              </div>
            </nav>
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
        <S.BrandSupportPage>
          <S.BrandSupportMaindev>
            <h1>
              BRAND
              <br />
              SUPPORT<div className="red-point"></div>
            </h1>
          </S.BrandSupportMaindev>
        </S.BrandSupportPage>

        <S.franchisePage>
          <S.franchiseBackground>{franchiseImgList}</S.franchiseBackground>

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
              <a>공지사항</a>
            </S.aContainer>
            <img src="https://www.twosome.co.kr/resources/images/main/main_news_illust.svg" />
            <S.gongydiv>
              <S.bodoSubDiv>{bodoList}</S.bodoSubDiv>
            </S.gongydiv>
          </S.newsMainDiv>
        </S.newsPage>
        <S.endInner>
          <S.endContainer>
            <ul>{endInnerList}</ul>
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
              {endInnerDivAList}
              <S.footerNav>{footerNavList}</S.footerNav>
              <S.imgContainer>{endInnerImgList}</S.imgContainer>
            </S.endBottomDiv>
          </S.endContainer>
        </S.endInner>
      </S.mainDiv>
    </>
  );
}

export default App;
