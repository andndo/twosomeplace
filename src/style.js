import styled from "styled-components";

export const backImg = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0;
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
