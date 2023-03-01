import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="lightBg" style={{padding: '0px 0px 50px 0px'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Pricing</h1>
            <p className="font18">
              Beginning at $14 per hour, we offer the highest-quality math tutoring at the most competitive rates
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                // icon="roller"
                price="$200.00/mo"
                title="Basic"
                text="One 2-hour sessions per week."
                offers={[
                  { name: "Weekly sessions", cheked: true },
                  { name: "Schoolwork help", cheked: true },
                  { name: "Rescheduling", cheked: false },
                  { name: "Homework assignment", cheked: false },
                  // { name: "Product Offer", cheked: false },
                ]}
                link="https://buy.stripe.com/3cs5kN4iDbHE8MM4gs"
              />
            </TableBox>
            <TableBox>
              <PricingTable
                // icon="monitor"
                price="$350.00/mo"
                title="Accelerated"
                text="Two 2-hour sessions per week."
                offers={[
                  { name: "Weekly sessions", cheked: true },
                  { name: "Schoolwork help", cheked: true },
                  { name: "Rescheduling", cheked: true },
                  { name: "Homework assignment", cheked: false },
                  // { name: "Product Offer", cheked: false },
                ]}
                link="https://buy.stripe.com/5kAcNf5mH9zwe76bIV"
              />
            </TableBox>
            <TableBox>
              <PricingTable
                // icon="browser"
                price="$450.00/mo"
                title="Light Speed"
                text="Unlimited sessions per week."
                offers={[
                  { name: "Weekly sessions", cheked: true },
                  { name: "Schoolwork help", cheked: true },
                  { name: "Rescheduling", cheked: true },
                  { name: "Homework assignment", cheked: true },
                  // { name: "Product Offer", cheked: true },
                ]}
                link="https://buy.stripe.com/cN2eVn2av2745AAaES"
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
      <div className="whiteBg" style={{padding: '0px 0px 50px 0px'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Session Times</h1>
            <p className="font18">
              You can sign up to attend any of our sessions to study with our tutors. All times are U.S. Eastern Standard Time
            </p>
            <h3 className="font24 extraBold" style={{padding: '20px 0px 10px 0px'}}>Tuesdays</h3>
              <p className="font18">
                6:00am | 4:30pm
              </p>
            <h3 className="font24 extraBold" style={{padding: '20px 0px 10px 0px'}}>Wednesdays</h3>
              <p className="font18">
                4:30pm | 9:00pm
              </p>
            <h3 className="font24 extraBold" style={{padding: '20px 0px 10px 0px'}}>Thursdays</h3>
              <p className="font18">
                6:00am | 8:00pm | 9:00pm
              </p>
            <h3 className="font24 extraBold" style={{padding: '20px 0px 10px 0px'}}>Saturdays</h3>
              <p className="font18">
                7:00am | 10:00am
              </p>
          </HeaderInfo>
          </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 20px 0px 50px 0px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 0px;
  padding: 60px 0px 0px 0px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




