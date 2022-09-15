import styled from "styled-components";
import { keyframes } from "styled-components";
import earth from "../../asset/earth.png";
import { createGlobalStyle } from "styled-components";

export const Body = styled.body`
  background-color: #fff;
`;

export const Bird = styled.div`
  background-image: url(${earth});
  background-size: auto 100%;
  width: 300px;
  height: 300px;
  animation: moving 6.5s infinite;
  animation-timing-function: steps(50);
  margin-top: 240px;
  margin-left: 500px;
  background-color: aquamarine;

  @keyframes moving {
    100% {
      background-position: -15000px 0;
    }
  }
`;
const upperColor = "#edf5f9";
const lowerColor = "gray";
export const skbar = styled.input`
  cursor: grab;
  margin-left: 1000px;
  margin-bottom: 500px;
  position: absolute;
  width: 250px;
  height: 100px;

  //-webkit-appearance: none;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  outline: black;
  accent-color: black;
`;

export function max(arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
}

export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
