import React from "react";
import styled from "styled-components";
// Components
import ProfileBox from "../Elements/ProfileBox";
// import FullButton from "../Buttons/FullButton";
import MinImage from "../../assets/img/profiles/profile-min.png";
import KwonImage from "../../assets/img/profiles/profile-kwon.png";
import JinaImage from "../../assets/img/profiles/JinaCard3.png";

export default function Team() {
  return (
    <Wrapper id="team">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Tutors</h1>
            <p className="font18">
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
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProfileBox
                name="Sam Kwon"
                title="Chief Growth Officer"
                alma_mater="MIT"
                exp_yrs="2 years"
                img={KwonImage}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProfileBox
                name="Jina Seok"
                title="Head Tutor - Canada"
                alma_mater="University of Toronto"
                exp_yrs="4 years"
                img={JinaImage}
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
  border-top: 0px;
  padding: 0px 10px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 20px;
  padding-top: 40px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;