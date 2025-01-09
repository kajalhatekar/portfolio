import { useInView } from "react-intersection-observer";
import {
  MainContainer,
  Box,
  BoxContainer,
  DateWrapper,
  Degree,
  AboutDegree,
  BoxWrapper,
  EducationWrapper,
  SecondEduWrapper,
  IconWrap,
} from "style/Education";
import { FaUserGraduate } from "react-icons/fa";
import { CollegeHeading, Heading } from "style/Skill";


const Educations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <MainContainer ref={ref} id="education">
      <EducationWrapper>
        <Heading
          style={{
            animation: inView ? "fadeInAndMoveDown 2s ease-out" : "none",
          }}
        >
          Education
        </Heading>
        <BoxContainer>
          <Box
            style={{
              animation: inView ? "fadeInAndMoveRight1 1.5s ease-out" : "none",
            }}
          >
            <IconWrap>
              <FaUserGraduate />
            </IconWrap>
            <div>
              <CollegeHeading>Rajindra Mishra College</CollegeHeading>
              <Degree>Bechlor of Computer Application</Degree>
              <DateWrapper>August 2017 - February 2021</DateWrapper>
              <AboutDegree>
                - Major: Electronics and Communication Engineering
              </AboutDegree>
              <AboutDegree>- Minor: Information Technology</AboutDegree>
            </div>
          </Box>
          <BoxWrapper
            style={{
              animation: inView ? "fadeInAndMoveRight2 1.5s ease-out" : "none",
            }}
          >
            <SecondEduWrapper>
              <IconWrap>
                <FaUserGraduate />
              </IconWrap>
              <div>
                <CollegeHeading>Lovely Professional University</CollegeHeading>
                <Degree>Master of Computer Application</Degree>
                <DateWrapper>May 2021 - August 2023</DateWrapper>
                <AboutDegree>
                  - Major: Electronics and Communication Engineering
                </AboutDegree>
                <AboutDegree>- Minor: Information Technology</AboutDegree>
              </div>
            </SecondEduWrapper>
          </BoxWrapper>
        </BoxContainer>
      </EducationWrapper>
    </MainContainer>
  );
};

export default Educations;
