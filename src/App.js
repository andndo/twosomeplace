import React from "react";
//import Earth from "./components/earth";
import * as S from "./style";
import "./App.css";
import { useRef, useEffect } from "react";

function App() {
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        console.log(pageHeight);
        if (scrollTop >= 0 && scrollTop + 1 < pageHeight) {
          console.log("현재 1페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, down");
          console.log(scrollTop, pageHeight);//2341.25, 1171
          console.log(scrollTop+1, pageHeight * 2);//2342.25, 2342
          outerDivRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop+1 >= pageHeight * 2 && scrollTop < pageHeight * 2 + 1) {
          console.log("현재 3페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 3,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          console.log("현재 4페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 4,
            left: 0,
            behavior: "smooth",
          });
         } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
            console.log("현재 4페이지, down");
            outerDivRef.current.scrollTo({
              top: pageHeight * 5,
              left: 0,
              behavior: "smooth",
            });
        } else {
          console.log("현재 5페이지, down");
          outerDivRef.current.scrollTo({
            top: pageHeight * 6,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        if (scrollTop >= 0 && scrollTop <= pageHeight) {
          console.log("현재 1페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 2) {
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          
        } 
        else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 2) {
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 2) {
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight*2,
            left: 0,
            behavior: "smooth",
          });
        }else if (scrollTop >= pageHeight && scrollTop <= pageHeight * 2) {
          console.log("현재 2페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight*3,
            left: 0,
            behavior: "smooth",
          });
        }else {
          console.log("현재 3페이지, up");
          outerDivRef.current.scrollTo({
            top: pageHeight*4,
            left: 0,
            behavior: "smooth",
          });
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
      <S.mainDiv ref={outerDivRef}>
        <div className="inner bg-yellow">1</div>
        <div className="inner bg-blue">2</div>
        <div className="inner bg-pink">3</div>
        <div className="inner bg-yellow">4</div>
        <div className="inner bg-blue">5</div>
        <div className="inner bg-pink">6</div>
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
