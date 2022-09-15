import * as S from "./styles";
import * as M from "./data";
import earth from "../../asset/earth.png";
import React, { useState } from "react";

function Earth() {
  const [value, setValue] = useState(0);
  const skbarValue = () => {
    console.log(value);
  };
  return (
    <S.Body>

      <S.Bird>
      </S.Bird>
      <S.skbar type="range" />

    </S.Body>
  );
}

export default Earth;
