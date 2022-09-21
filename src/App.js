import React from "react";
//import Earth from "./components/earth";
import * as S from "./style";
import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(10);
  const [pagenumberX, setPageNumberX] = useState(1);
  const [pagenum, setPagenum] = useState("01");
  const outerDivRef = useRef();
  const pageWidth = window.innerWidth;
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop + 1 < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("02");
          setNumber(20);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("03");
          setNumber(30);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("04");
          setNumber(40);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("05");
          setNumber(50);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("06");
          setNumber(60);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight * 5 + pageHeight / 1.7,
            left: 0,
            behavior: "smooth",
          });
          console.log(number);
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
  const onClick = () => {
    setPageNumberX(pagenumberX === 1 ? 2 : 1)
  };
  return (
    <>
      <div className="progress-div">
        {pagenum}
        <progress value={number} max="60" class="bar"></progress>
        06
      </div>
      <S.swiperDiv>
        <div className="controlImg">
          <S.rightBtn>
            <img
              src="https://www.twosome.co.kr/resources/images/main/ico_arrow_left.svg"
              alt=""
            />
          </S.rightBtn>
          {pagenumberX}/2
          <S.rightBtn onClick={onClick}>
            <img
              src="https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg"
              alt=""
            />
          </S.rightBtn>
        </div>
      </S.swiperDiv>
      <S.mainDiv ref={outerDivRef}>
        <S.backImg
          src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220407_xYuWGMXB"
          alt="배경1-2"
        />
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
        <S.backImg
          src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220308_xgmVdukT"
          alt="배경1-2"
        />
        <div className="inner bg-yellow"></div>
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
