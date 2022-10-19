import styled, { keyframes } from "styled-components";
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform:translateX(-1920px);
  }
`;
export const headerItemName = styled.div`
  display: flex;
  width: 175px;
  font-size: 15px;
  position: absolute;

  margin: 0 auto;
`; /*background: transparent;
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

  align-items: flex-start;
  .twosomeBlack {
    position: absolute;
    opacity: 0;
    top: 40px;
    left: 80px;
  }
  li {
    letter-spacing: -0.5px;
    list-style: none;
    font-size: 17px;
    line-height: 20px;
    padding: 35px 0;
    font-weight: 900;
    width: 210px;
    .cubeWhie {
      position: absolute;
      opacity: 1;
      top: 40px;
      right: 45px;
    }
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
    ul {
      display: flex;
      flex-direction: column;
      text-align: left;
      li {
        float: left;
        padding: 0;
        display: inline-block;
        margin: 0;
        font-size: 16px;
        line-height: 1em;
        ul {
          li {
            text-align: left;

            color: rgb(186, 186, 186);
            font-size: 14px;
          }
        }
      }
    }
  }
}*/
export const header = styled.div`
  background: transparent;
  transition: all 0.3s cubic-bezier(0.16, 0.04, 0.03, 0.95);
  position: absolute;
  width: 100%;
  height: 100px;
  overflow: hidden;
  z-index: 1;

  ul {
    display: flex;
    .twosomeBlack {
      position: absolute;
      opacity: 0;
      top: 40px;
      left: 80px;
    }

    li {
      padding: 0;
      margin: 0;
      list-style: none;
      line-height: 80px;
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
        ul {
          li {
            ul {
              li {
                color: rgb(186, 186, 186);
              }
            }
          }
        }
        .cubeBlack {
          opacity: 1;
        }
        .cubeWhie {
          opacity: 0;
        }
      }
    }
  }
`;
export const franchiseMainDiv = styled.div`
  padding-top: 90px;
`;
export const franchiseBackground = styled.div`
  position: absolute;
  height: 100%;
  width: calc(1920px * 2);
  animation: ${scroll} 40s linear infinite;
  background-color: blue;
  z-index: 999;
  img {
    width: 160px;
    height: 160px;
  }
  .circleimg1 {
    position: absolute;
    margin-top: 300px;
    margin-left: 2834px;
  }
  .circleimg2 {
    position: absolute;
    margin-top: 700px;
    margin-left: 3234px;
  }
  .circleimg3 {
    position: absolute;
    margin-top: 200px;

    margin-left: 3534px;
  }
  .circleimg4 {
    position: absolute;
    margin-left: 3834px;
    margin-top: 650px;
  }
  .circleimg5 {
    position: absolute;
    margin-left: 4234px;
    margin-top: 250px;
  }
`;
export const gongydiv = styled.div`
  position: absolute;

  bottom: 0px;
`;
export const endRightDiv = styled.div`
  width: auto;
  position: absolute;
  top: 0;
  right: 0;
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #fff;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #777;
  }
`;
export const footerNav = styled.div`
font-size: 14px;
font-weight: 400;
color: #777;
`
export const endBottomDiv = styled.div`
  background-color: blue;
  width: 100%;
  display: inline-flex;
  gap: 30px;
  div {
    margin-top: 20px;
    margin-left: 43px;
    color: #fff;
    a {
      text-decoration: none;
      font-weight: 900;
      font-size: 14px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  .yellow {
    color: #f5ce3e;
  }
`;
export const endContainer = styled.div`
  display: inline-block;
  width: 1312px;
  height: 430px;
  position: relative;
  background-color: red;
  margin-top: 60px;
  margin-left: 300px;
  text-align: left;
  ul {
    display: block;
    width: 230px;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    li {
      list-style: none;
      line-height: 50px;
      color: #fff;
      font-size: 24px;
      font-weight: 900;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  hr {
    height: 1px;
    background-color: #333333;
    border: 0;
  }
`;
export const MenuStoryPage = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const MenuStoryMainDiv = styled.div`
  width: 1312px;
  height: 540.95px;
  background-color: blue;
  h1 {
    margin-top: 20px;
    margin-left: 50px;
    line-height: 1;
    color: #000;
    font-size: 96px;
    font-weight: 800;
  }
  ul {
    li {
      list-style: none;
      margin-bottom: 28px;
      p {
        font-size: 16px;
        color: #000;
      }
      a {
        font-size: 32px;
        font-weight: 900;
      }
    }
  }
`;
export const newsPage = styled.div`
  width: 100%;
  height: 100vh;
  display: inline-block;
  text-align: left;
  position: relative;
`;
export const newsMainDiv = styled.div`
  display: block;
  position: relative;
  margin: 0 auto;
  padding: 0 48px;
  max-width: 1312px;
  a {
    display: inline-block;
    height: 34px;
    margin: 0 20px;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: #d50037;
      text-underline-position: under;
    }
  }
  img {
    display: block;
    width: 320px;
    height: 203px;
    margin-bottom: 10vh;
  }
`;
export const aContainer = styled.div`
  margin: 48px -20px 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const newsH1 = styled.div`
  margin-top: 56px;
  h1 {
    display: inline-block;
    opacity: 1;
    line-height: 1;
    color: #000;
    font-family: "Mark Pro";
    font-size: 96px;
    font-weight: 800;
    .red-point {
      margin-left: 442px;
    }
  }
`;
export const franchiseBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    button {
      margin-bottom: 10vh;
      flex-wrap: wrap;
      min-width: 240px;
      height: 64px;
      padding-left: 24px;
      padding-right: 24px;
      font-weight: 600;
      font-size: 16px;
      overflow: hidden;
    }
  }

  span {
    /* z-index: 990; */
    background-color: #000;
    width: 240px;
    height: 64px;
    margin-left: 240px;
    color: blue;
  }
`;

export const franchisePage = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  h1 {
    display: inline-block;
    margin-top: 20vh;
    margin-bottom: 20px;
    opacity: 1;
    line-height: 1;
    color: #000;
    font-family: "Mark Pro";
    font-size: 96px;
    font-weight: 800;
    padding: 0;
  }
  h3 {
    display: block;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 700;
    color: #000;
  }
  p {
    display: block;
    margin-bottom: 48px;
    font-size: 18px;
    font-weight: 400;
    color: #333;
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
  background-color: #222;
  align-items: center;
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
  .directionKey {
    width: 24px;
    height: 24px;
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
