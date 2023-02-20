import React from "react";
import styled from "styled-components";
// Components
// import FullButton from "../Buttons/FullButton";
// import DemoVideo from "../Elements/DemoVideo";
// Assets
import HeaderImage from "../../assets/img/tablet_sideways.png";
// import Dots from "../../assets/svg/Dots";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="headerMain"> Learn by doing with the world's #1 online tutor</h1>
          <ul className="headerList">
            <li> 
              <p><span style={{color: "#228B22" }}>✔</span> Proven lectures and questions </p>
            </li>
            <li>
              <p><span style={{color: "#228B22" }}>✔</span> Tutors with 20+ yrs of experience </p>
            </li>
            <li>
              <p><span style={{color: "#228B22" }}>✔</span> Courses designed <em>just for you </em></p>
            </li>
          </ul>
          {/* <HeaderP className="headerBody semiBold" >
            Work with our best tutors that have 20+ years of math tutoring experience that have sent 500+ students to North America's 
            top universities distilled into an interactive tablet application
          </HeaderP> */}
          {/* <BtnWrapper>
            <a href="https://calendly.com/d/hw9-7wv-n3y/assessment">
            <FullButton title="Schedule assessment" />
            </a>
          </BtnWrapper> */}
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8transparent" src={HeaderImage} alt="office" style={{zIndex: 9}} />
          
          {/* <DotsWrapper>
            <Dots />
          </DotsWrapper> */}
        </ImageWrapper>
        {/* <GreyDiv className="lightBg"></GreyDiv> */}
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 70%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
    line-height: 1.5px;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 1080px) {
    width: 180%;
    order: 1;
    margin-top: 30px;
  }
`;
// const HeaderP = styled.div`
//   max-width: 470px;
//   padding: 15px 0 50px 0;
//   line-height: 1.5rem;
//   @media (max-width: 960px) {
//     padding: 15px 0 50px 0;
//     text-align: center;
//     max-width: 100%;
//   }
// `;
// const BtnWrapper = styled.div`
//   max-width: 190px;
//   @media (max-width: 960px) {
//     margin: 0 auto;
//   }
// `;
// const GreyDiv = styled.div`
//   width: 50%;
//   height: 700px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 70%;
    height: auto;
  }
`;
// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 50px;
//   max-width: 330px;
//   padding: 30px;
//   z-index: 99;
//   @media (max-width: 960px) {
//     left: 20px;
//   }
//   @media (max-width: 560px) {
//     bottom: -50px;
//   }
// `;
// const QuotesWrapper = styled.div`
//   position: absolute;
//   left: -20px;
//   top: -10px;
// `;
// const DotsWrapper = styled.div`
//   position: absolute;
//   right: -100px;
//   bottom: 100px;
//   z-index: 2;
//   @media (max-width: 960px) {
//     right: 100px;
//   }
//   @media (max-width: 560px) {
//     display: none;
//   }
// `;


