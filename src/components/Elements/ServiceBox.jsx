import React from "react";
import styled from "styled-components";
// Assets

import VideoIcon from "../../assets/img/icons/videos.png"
import ExpertIcon from "../../assets/img/icons/expert-review.png"
import ExperiencedIcon from "../../assets/img/icons/experienced-tutors.png"
import TailoredIcon from "../../assets/img/icons/tailored-experience.png"
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "videos":
      getIcon = <img src={VideoIcon} className="icon"/>
      break;
    case "expert":
      getIcon = <img src={ExpertIcon} className="icon"/>
      break;
    case "experienced":
      getIcon = <img src={ExperiencedIcon} className="icon"/>
      break;
    case "tailored":
      getIcon = <img src={TailoredIcon} className="icon"/>
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;