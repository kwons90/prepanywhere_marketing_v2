import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
// Assets
import ProjectImg1 from "../../assets/img/students/olivie-nie.png";
import ProjectImg2 from "../../assets/img/students/andy-lee.png";
import ProjectImg3 from "../../assets/img/students/esther-sohn2.png";
import ProjectImg4 from "../../assets/img/students/raymond-jang.png";
import ProjectImg5 from "../../assets/img/students/mike-woo.png";
import ProjectImg6 from "../../assets/img/students/kimberly-seaman.png";
import HarvardCase from "../../assets/img/students/olivia-nie-linkedin.png";

export default function Results() {
  return (
    <Wrapper id="results" >
      <div className="whiteBg">
      <div className="container" style={{padding: '30px'}}>
      <HeaderInfo>
            <h1 className="font40 extraBold">Our Student Outcomes</h1>
              <p className="font18">
                We have taught over 2,000 students, and over 500 of our students have gone onto graduate from North America's top universities
              </p>
        </HeaderInfo>
        </div>
        <div className="container">
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                name="Olivia Nie"
                subject="7/7 in IB Higher Level Math"
                school="Harvard University"
                text="A.B. in Government"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                name="Andy Lee"
                subject="100% in Calculus"
                school="University of Pennsylvania"
                text="B.S. Systems Engineering"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                name="Esther Sohn"
                subject="95% in Calculus"
                school="Georgetown University"
                text= "B.S. Foreign Services"
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                name="Raymond Jang"
                subject="5/5 in AP Calculus BC"
                school="Northwestern University"
                text="B.S. Physics"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                name="Mike Woo"
                subject="99% in Calculus"
                school="University of Toronto"
                text="B.S. Physics and Math"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                name="Kimberly Seaman"
                subject="99% in Calculus"
                school="McGill University"
                text="B.S. Chemical Engineering"
              />
            </div>
          </div>
          {/* <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={HarvardCase} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">PrepBox student case study</h4>
              <h2 className="font40 extraBold">Beyond Graduation</h2>
              <p className="font15">
                Our program graduates remember us even after college graduation. We are proud to have produced these outcomes.
              </p>
            </AddRight>
          </Advertising> */}
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="lightBg" style={{padding: '30px'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Best Student Moments</h1>
            <p className="font15">
              We are loved by the students and the parents, who learn through PrepBox, and we intend to keep it this way
            </p>
          </HeaderInfo>
        </div>
      </div> */}
      <div className="lightBg">
        <div className="lightBg" style={{padding: '50px'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Testimonials</h1>
            <p className="font18">
              We are loved by the students and the parents, who learn through PrepBox, and we intend to keep it this way
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
      </div>
      {/* </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 180px 0 540px;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 120px 0 430px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 20px 0 10px 0px;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  padding: 0;
  width: 90%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 0px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 60%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
