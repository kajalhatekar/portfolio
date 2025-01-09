import React from "react";
import {
  QuoteContainer,
  QuoteContent,
  ServiceList,
  ServiceListItem,
  ServiceText,
  MainWrapper,
  Location,
  DataWrapper,
  TimePeriod,
  Circle,
  RoleText,
} from "style/Experience";
import { Heading } from "style/Skill";
import { MainContainer } from "style/Education";
import { useInView } from "react-intersection-observer";
import WilIcon from "assets/svg/WilIcon";

const serviceData = [
  {
    Role: "Front-End Developer",
    location: "Wits Innovation Lab",
    TimePeriod: "01/ 2023 - Present",
    icon: <WilIcon />,
    services: [
      "Utilized HTML, CSS, and JavaScript, to create 40+ responsive landing pages for both company and clients.",
      "Collaborated with UX/UI designers to transform wireframes into high-quality, user-friendly interfaces, enhancing overall user experience.",
      "Utilized modern front-end frameworks like React.js, MUI, ANT-Design for building dynamic and interactive user interfaces, integrating RESTful APIs for seamless data exchange.",
      "Optimized website performance by implementing best practices in code optimization, image compression, and Lazy loading, resulting in faster load times and improved user engagement.",
    ],
  },
  {
    Role: "Software Developer Intern",
    location: "Wits Innovation Lab",
    TimePeriod: "07/ 2022 - 12/ 2022",
    icon: <WilIcon />,
    services: [
      "Developed and deployed web applications, enhancing user experience through innovative design and functionality.",
      "Actively contributed to coding tasks, implementing features, and resolving bugs as part of an agile development team.",
      "Performed validations on Web Forms, improving data accuracy and system reliability.",
      "Created and maintained documentation to ensure accurate integration of applications into the existing system architecture.",
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <MainContainer ref={ref} id="experience">
      <DataWrapper>
        <Heading
          style={{
            animation: inView ? "fadeInAndMoveDown 2s ease-out" : "none",
          }}
        >
          Experience
        </Heading>
        <MainWrapper>
          {serviceData.map((service, index) => (
            <QuoteContainer
              key={index}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 1s ease-out ${
                  index * 0.5
                }s, transform 1s ease-out ${index * 0.5}s`,
              }}
            >
              <p className="quote">
                <QuoteContent>
                  <Circle> {service.icon}</Circle>

                  <RoleText>{service.location}</RoleText>
                </QuoteContent>
                <ServiceList>
                  <Location>{service.Role}</Location>
                  <TimePeriod>{service.TimePeriod}</TimePeriod>

                  {service.services.map((text, idx) => (
                    <ServiceListItem key={idx}>
                      •<ServiceText>{text}</ServiceText>
                    </ServiceListItem>
                  ))}
                </ServiceList>
              </p>
            </QuoteContainer>
          ))}
        </MainWrapper>
      </DataWrapper>
    </MainContainer>
  );
};

export default Experience;
