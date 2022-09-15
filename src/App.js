import React from "react";
import Earth from "./components/earth";
import * as S from "./style";
import "./App.css";
import { useRef } from "react";

function App() {
  const DIVIDER_HEIGHT = 5;
  const outerDivRef = useRef();
  const wheelHandler = (e) => {
    e.preventDefault();
    const { deltaY } = e;
    const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
    const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
  
    if (deltaY > 0) {
      // 스크롤 내릴 때
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        //현재 1페이지
        console.log("현재 1페이지, down");
        outerDivRef.current.scrollTo({
          top: pageHeight + DIVIDER_HEIGHT,
          left: 0,
          behavior: "smooth",
        });
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        //현재 2페이지
        console.log("현재 2페이지, down");
        outerDivRef.current.scrollTo({
          top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // 현재 3페이지
        console.log("현재 3페이지, down");
        outerDivRef.current.scrollTo({
          top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
          left: 0,
          behavior: "smooth",
        });
      }
    } else {
      // 스크롤 올릴 때
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        //현재 1페이지
        console.log("현재 1페이지, up");
        outerDivRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        //현재 2페이지
        console.log("현재 2페이지, up");
        outerDivRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else {
        // 현재 3페이지
        console.log("현재 3페이지, up");
        outerDivRef.current.scrollTo({
          top: pageHeight + DIVIDER_HEIGHT,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <S.mainDiv ref={outerDivRef}>
      <S.backImg
        src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220308_xgmVdukT"
        alt="배경1-2"
      />
          <S.divider></S.divider>
      {/* <img src="/resources/images/content/img_p_coffeestory.jpg" alt="커피 사진"></img> */}
      <S.backImg src="https://www.twosome.co.kr/resources/images/main/main_alist_pc.jpg" />
      <S.divider></S.divider>
      <S.backImg
        src="https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220308_xgmVdukT"
        alt="배경1-2"
      />
    </S.mainDiv>
  );
}

export default App;
