import styled from "styled-components";

export const header = styled.div`
  background: transparent;
  transition: all 0.3s cubic-bezier(0.16, 0.04, 0.03, 0.95);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  height: 100px;
  overflow: hidden;
  z-index: 1;

  ul {
    display: flex;
    justify-content: space-around;
    .twosomeBlack {
      position: absolute;
      opacity: 0;
      top: 40px;
      left: 80px;
    }
    li {
      letter-spacing: -0.5px;
      list-style: none;
      font-size: 18px;
      line-height: 20px;
      padding: 25px 5px;
      font-weight: 900;
      .cubeBlack {
        position: absolute;
        opacity: 0;
        top: 40px;
        right: 45px;
      }
      transition: all 0.3s cubic-bezier(0.16, 0.04, 0.03, 0.95);
      img {
        margin-left: 200px;
      }
    }
  }

  &:hover {
    height: 420px;
    background-color: #fff;
    ul {
      .twosomeBlack {
        opacity: 1;
      }
      .twosomeWhite {
        opacity: 0;
      }
      li {
        color: #000;
        .cubeBlack {
          opacity: 1;
        }.cubeWhie {
          opacity: 0;
        }
      }
    }
  }
`;
export const backImg = styled.img`
  width: 1307px;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const slideImg = styled.div`
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
  display: flex;
  position: absolute;
  top: 0;
  z-index: 0;
`;
export const btnContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  right: 32px;
  bottom: 32px;
  z-index: 1;
`;
export const upBtn = styled.button`
  transition: 0.5s all;
  height: 64px;
  margin-top: 16px;
  font-size: 26px;
  float: right;
  width: 64px;
  margin-right: 4px;
  border: none;
  color: #fff;
  background-color: rgba(120, 120, 120, 0.7);
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.16, 0.04, 0.03, 0.95);
`;
export const buyingBtn = styled.button`
  display: flex;
  overflow: hidden;
  float: right;
  width: 191px;
  height: 72px;
  border-radius: 72px;
  background-color: rgba(213, 0, 55, 0.9);
  border: 0;
  outline: 0;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.16, 0.04, 0.03, 0.95);

  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.1;
    margin-right: 12px;
    white-space: nowrap;
    color: #fff;
  }
  div {
    display: inline-block;
    width: 37px;
    height: 37px;
    background-size: 100% auto;
    background-image: url("https://www.twosome.co.kr/resources/images/main/ico_floating.svg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    position: relative;
    margin-top: 2px;
  }
`;
export const A_list_img = styled.div`
  z-index: 1000;

  background-image: url("https://www.twosome.co.kr/resources/images/main/main_alist_pc.jpg");
  background-position: 0 -140px;
  object-fit: cover;
  height: 100vh;
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
  position: relative;
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
