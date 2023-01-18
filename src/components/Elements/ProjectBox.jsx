import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, name, subject, school, text}) {
  return (
    <Wrapper className="radius8 shadow">
      <ImgBtn className="studentImg">
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>
      <p> </p>
      <h3 className="font20 extraBold">{name}</h3>
      <p className="font13">{subject}</p>
      <p className="font13">{school}</p>
      <p className="font13">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    padding: 3px;
  }
  h3 {
    padding-bottom: 0;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  margin: 0px;
  }
`;