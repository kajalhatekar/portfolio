import { useInView } from "react-intersection-observer";
import {
  MainContainer,
  BoxContainer,
  DateWrapper,
  Degree,
  AboutDegree,
  BoxWrapper,
  EducationWrapper,
  IconWrap,
} from "style/Education";
import { FaUserGraduate } from "react-icons/fa";
import { CollegeHeading, Heading } from "style/Skill";

const educationData = [
  {
    id: 1,
    college: "Rajindra Mishra College",
    degree: "Bachelor of Computer Application",
    duration: "August 2017 - February 2021",
    details: [
      "Major: Electronics and Communication Engineering",
      "Minor: Information Technology",
    ],
    animation: "fadeInAndMoveRight1",
  },
  {
    id: 2,
    college: "Lovely Professional University",
    degree: "Master of Computer Application",
    duration: "May 2021 - August 2023",
    details: [
      "Major: Electronics and Communication Engineering",
      "Minor: Information Technology",
    ],
    animation: "fadeInAndMoveRight2",
  },
];

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
          {educationData.map(
            ({ id, college, degree, duration, details, animation }) => (
              <BoxWrapper
                key={id}
                style={{
                  animation: inView ? `${animation} 1.5s ease-out` : "none",
                }}
              >
                  <IconWrap>
                    <FaUserGraduate />
                  </IconWrap>
                  <div>
                    <CollegeHeading>{college}</CollegeHeading>
                    <Degree>{degree}</Degree>
                    <DateWrapper>{duration}</DateWrapper>
                    {details.map((detail, index) => (
                      <AboutDegree key={index}>{detail}</AboutDegree>
                    ))}
                  </div>
              </BoxWrapper>
            )
          )}
        </BoxContainer>
      </EducationWrapper>
    </MainContainer>
  );
};

export default Educations;
