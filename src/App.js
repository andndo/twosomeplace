import React from "react";
//import Earth from "./components/earth";
import * as S from "./style";
import "./App.css";
import { useRef, useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(10);
  const [pagenum, setPagenum] = useState("");
  const outerDivRef = useRef();
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
          setNumber(number + 10);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("03");
          setNumber(number + 20);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("04");
          setNumber(number + 30);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("05");
          setNumber(number + 40);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 5,
            left: 0,
            behavior: "smooth",
          });
          setPagenum("06");
          setNumber(number + 50);
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
  return (
    <>
      <div class="progress-div">
        {pagenum}
        <progress value={number} max="60" class="bar"></progress>
        06
      </div>
      <S.mainDiv ref={outerDivRef}>
        <S.backImg
          src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220407_xYuWGMXB"
          alt="배경1-2"
        />
        <S.backImg src="https://www.twosome.co.kr/resources/images/main/main_alist_pc.jpg" />
        <S.backImg
          src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220308_xgmVdukT"
          alt="배경1-2"
        />
        <div className="inner bg-yellow">4</div>
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
