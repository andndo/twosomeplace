import styled from "styled-components";

export const backImg = styled.img`
  width: 1307px;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const backImg2 = styled.img`
  width: 1307px;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-left: -1000px;
`;

export const A_list_img = styled.div`
  background-image: url("https://www.twosome.co.kr/resources/images/main/main_alist_pc.jpg");
  height: 100%;
  width: 100%;
`;
export const mainDiv = styled.div`
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;
export const endInner = styled.div`
  width: 100%;
  height: 600px;
  background-color: #333333;
`;
export const swiperDiv = styled.div`
  display: flex;
  position: absolute;
  z-index: 999;
  left: 50%;
  width: 240px;
  height: 56px;
  margin-left: -120px;
  border-radius: 56px;
  bottom: 32px;
  background: rgba(0, 0, 0, 0.6) !important;
  align-items: center;
  justify-content: center;
  transform: translate(0, 0);
  color: #fff;
  div {
    width: 240px;
    display: inline-flex;
    justify-content: center;
  }
  img {
    &:hover {
      cursor: pointer;
    }
  }
`;
export const firstMainImg = styled.div`
  /* background: url("https://mcdn.twosome.co.kr/upload/MODS0030/202106/MODS0030_20210617220407_xYuWGMXB");
  height: 100%;
  width: 100%; */
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  img {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;
export const rightBtn = styled.div`
  /* background: url("https://www.twosome.co.kr/resources/images/main/ico_arrow_right.svg")
    50% 50% no-repeat; */
`;
