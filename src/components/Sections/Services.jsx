import React from "react";
import styled from "styled-components";
// Components
import DemoVideo from "../Elements/DemoVideo";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/screenshots/lecture_screenshot1.png";
import bookingGIF from "../../assets/img/screenshots/booking.gif";
import logInGIF from "../../assets/img/screenshots/loginGIF.gif";
import lectureGIF from "../../assets/img/screenshots/watchlectures.gif";
import solvingGIF from "../../assets/img/screenshots/solving.gif";
import submitandmarkGIF from "../../assets/img/screenshots/submitandmark.gif";
import asktutorGIF from "../../assets/img/screenshots/asktutor.gif";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/screenshots/question_solving.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">     
      
      <div className="whiteBg" style={{ padding: "60px 0" }}>
      <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h4 className="font16 semiBold">Our philosophy</h4>
                <h2 className="font40 extraBold">Learn by Doing</h2>
                <p className="font15">
                  We are strong believers that the application of theory in the form of problem solving
                  is as equally important as theory in learning. <br/>
                  Our product reflects these values.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                <BtnWrapper>
            <a href="https://calendly.com/d/hw9-7wv-n3y/assessment">
            <FullButton title="Schedule assessment" />
            </a>
          </BtnWrapper>
              
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} width="400px" alt="lecture_screenshot" />
                    </AddImgWrapp1>
                    {/* <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2> */}
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    {/* <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4> */}
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
        <div className="container" style={{ padding: "0 0px 30px 30px" }} >
        <HeaderInfo>
            <h1 className="font40 extraBold">How does it work?</h1>
            {/* <p className="font18">
              As simple as ABC
            </p> */}
          </HeaderInfo>
        </div>
        <div className="divider">
          <div className="containerLeft">
          <AddImgWrapp2 className="flexCenter">
            <img src={bookingGIF} width="400px" alt="booking" />
          </AddImgWrapp2>
          </div>
          <div className="container font18">
          <h3>Step 1. Book your free asssessment</h3>
            <p> Understand where you are for your grade and identify weaknesses</p>
          </div>
        </div>
        <div className="divider">
          <div className="containerLeft">
          <AddImgWrapp2 className="flexCenter">
            <img src={logInGIF} width="400px" alt="loginGIF" />
          </AddImgWrapp2>
          </div>
          <div className="container font18">
          <h3>Step 2. Login to your account</h3>
            <p> Where you will be greeted with your individually designed courses</p>
          </div>
        </div>
        <div className="divider">
          <div className="containerLeft">
          <AddImgWrapp2 className="flexCenter">
            <img src={lectureGIF} width="400px" alt="loginGIF" />
          </AddImgWrapp2>
          </div>
          <div className="container font18">
          <h3>Step 3. Watch mini-lectures</h3>
            <p> The "learning": our lectures are short and sweet</p>
          </div>
        </div>
        <div className="divider">
          <div className="containerLeft">
          <AddImgWrapp2 className="flexCenter">
            <img src={solvingGIF} width="400px" alt="loginGIF" />
          </AddImgWrapp2>
          </div>
          <div className="container font18">
          <h3>Step 4. Begin solving questions</h3>
            <p> The "doing": begin applying concepts <em>immediately </em> </p>
          </div>
        </div>
        <div className="divider">
          <div className="containerLeft">
          <AddImgWrapp2 className="flexCenter">
            <img src={submitandmarkGIF} width="400px" alt="loginGIF" />
          </AddImgWrapp2>
          </div>
          <div className="container font18">
          <h3>Step 5. Submit and get marked real-time</h3>
            <p> Receive immediate feedback</p>
          </div>
        </div>
        <div className="divider">
          <div className="containerLeft">
          <AddImgWrapp2 className="flexCenter">
            <img src={asktutorGIF} width="400px" alt="loginGIF" />
          </AddImgWrapp2>
          </div>
          <div className="container font18">
          <h3> If stuck, ask our tutors</h3>
            <p> We respond right away!</p>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <DemoVideo />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        {/* <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What's in PrepBox?</h1>
            <p className="font18">
              A comprehensive math tutoring experience from pre-algebra to advanced calculus, setting you up for academic success beyond the classrooms
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="videos"
                title="100k+ Proven Lectures"
                subtitle="The same set of lectures that have sent 500+ students to top universities guide you from from algebra to calculus."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="expert"
                title="Expert Review"
                subtitle="Submitted solutions are marked and reviewed by experts, assisted by our A.I. and solution videos"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="experienced"
                title="Experienced Tutors"
                subtitle="Tutors from our platform are graduates of top universities with years of experience"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox 
                icon="tailored" 
                title="Tailored Experience" 
                subtitle="We tailor our courses and content to the student, setting a pace that best fits the student" />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div> */}
        
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;


const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 100%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 100%;
  margin: 0 0% 10px -5%;
  padding: 0 0 30px 0;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    flex-direction: column;
    width: 120%;
    padding: 10px 5px 10px 5px;
    img {
      width: 135%;
    }
  }
`;
const AddImgWrapp3 = styled.div`
  width: 100%;
  margin-left: 10%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;