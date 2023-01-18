import React from "react";
import styled from "styled-components";

export default function ProfileBox({img, name, title, alma_mater, exp_yrs, text }) {
  return (
      <Wrapper className="whiteBg radius8 shadow">
        <img src={img} alt="profile" width="200pt"/>
        <h3 className="font20 extraBold blueColor">{name}</h3>
        <p className="font18">{title}</p>
        <p className="font15" style={{ padding: "1px 0" }}>
          <strong>Tutor Experience: </strong>{exp_yrs}
        </p>
        <p className="font15" style={{ padding: "1px 0" }}>
          <strong>Alma mater: </strong>{alma_mater}
        </p>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
