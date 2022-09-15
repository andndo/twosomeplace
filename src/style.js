import styled from "styled-components";

export const backImg = styled.img`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const mainDiv = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;
export const divider = styled.div`
  width: 100%;
  height: 5px;
  background-color: gray;
`;
