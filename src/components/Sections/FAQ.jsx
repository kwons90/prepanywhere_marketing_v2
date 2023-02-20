import React from "react";
import styled from "styled-components";
// Components
// import ProjectBox from "../Elements/ProjectBox";
// Assets
// import Matrix from "../../assets/img/screenshots/PrepBox_matrix.png";

export default function FAQ() {
  return (
    <Wrapper id="faq" >
      <div className="whiteBg">
      <div className="container">
      <HeaderInfo>
            <h1 className="font40 extraBold">Frequently Asked Questions</h1>
            <br />
            <h2 className="font18 semiBold">What is PrepBox?</h2>
              <p className="font15">
              PrepBox is an iPad application that delivers world-class math tutoring experience through an interactive platform that iterates between lectures and problems under the guidance of an experienced tutor to facilitate rapid grasp of fundamental concepts and help the students become better problem-solvers. After completing our 1-hour assessment, students embark on a journey of their own pace, where they watch our lectures, apply the concepts to solve challenging problems supported by our hints and solution reviews, and get their answers reviewed by our A.I. and expert tutors on the platform.
              </p>
              <br />
              <h2 className="font18 semiBold">Who should use PrepBox?</h2>
              <p className="font15">
              Any student above 6th grade that wants to improve on his or her mathematical foundations and become better problem-solvers. Our programs cover all subjects from 6th grade to AP Calculus BC or IB Higher Level, ranging from algebra and factoring to advanced calculus.
              </p>
              <br />
              <h2 className="font18 semiBold">How is PrepBox different from other online tutoring services?</h2>
              <p className="font15">
              Unlike other online tutoring services, PrepBox contains (i) tried-and-tested lectures, (ii) problems with hints and solutions, (iii) whiteboard for problems-solving and showing proof of work, and (iv) guidance from an experienced tutor that enable us to deliver our “learn by doing” methodology for the best-in-class educational outcomes.
              </p>
              {/* <br />
              <img src={Matrix} width="550px" className="img" />
              <br /> */}
              <br />
              <h2 className="font18 semiBold">Is PrepBox better than in-person tutoring?</h2>
              <p className="font15">
              We made PrepBox to be able to deliver the same quality of math tutoring that amazing tutors whose ability, care, and attention can lift students to greater heights in 1-on-1 settings. Our founder, Min Lee, was one of these tutors, and we designed PrepBox to deliver even better results than Min’s track record. We have trained 2,000 students on older versions of PrepBox and have sent 500+ students to top universities such as Harvard, UPenn, McGill, and University of Toronto, and we can confidently assure you that we are committed to only improving on this track record.
              </p>
              <br />
              <h2 className="font18 semiBold">What is learning by doing and how does it work?</h2>
              <p className="font15">
              Taking after MIT’s educational motto, mens et manus (mind and hand), we believe that the application of theory is equally as important as the theory itself in education. This philosophy is core in our product design, as PrepBox iterates between lectures and problems in 10-15 minute intervals, facilitating quicker understanding of the concepts by the students as they immediately apply the lessons learned onto problem sets, embodying our slogan “learn by doing”.
              </p>
              <br />
              <h2 className="font18 semiBold">Does PrepBox assign homework?</h2>
              <p className="font15">
              We do not assign homework. We are here to facilitate learning and understanding, not add to the students’ schoolwork.
              </p>
              <br />
              <h2 className="font18 semiBold">What do I need to use PrepBox?</h2>
              <p className="font15">
              As our app is currently only available in iOS, you will require:
              <br />
                - iPad that is 7th generation or above
                <br />
                - Stylus pen or working digital pen
              <br />
              If you commit to a 12-month term, we will mail you an iPad and a pen.
              </p>
              < br />
              <h2 className="font18 semiBold">How do I sign up?</h2>
              <p className="font15">
              Schedule an assessment with us using our Calendly link or just email us at minlee@prepanywhere.com. After the 1-hr assessment, we will generate a log-in and password for your account so that you can begin your journey with us!
              </p>
              <br />
        </HeaderInfo>
      </div>
      </div>
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
  padding-bottom: 30px;
`;
