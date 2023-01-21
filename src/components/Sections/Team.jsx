import React from "react";
import styled from "styled-components";
// Components
import ProfileBox from "../Elements/ProfileBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
import MinImage from "../../assets/img/profiles/profile-min.png";
import KwonImage from "../../assets/img/profiles/profile-kwon.png";

export default function Team() {
  return (
    <Wrapper id="team">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Tutors</h1>
            <p className="font15">
              The PrepBox team is composed of graduates from top schools and are tutors on the platform
              <br />
              
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProfileBox
                name="Min Lee"
                title="Founder/CEO"
                alma_mater="University of Toronto"
                exp_yrs="20 years"
                img={MinImage}
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProfileBox
                name="Sang-Hyuk Kwon"
                title="Chief Growth Officer"
                alma_mater="MIT"
                exp_yrs="2 years"
                img={KwonImage}
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
              />
            </div>
           
          </div>
          <div className="row flexCenter">
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;