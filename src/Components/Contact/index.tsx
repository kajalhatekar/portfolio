import {
  RoadMapContent,
  RoadMapContentHeading,
  RoadMapContentNumber,
  RoadMapContentParagraph,
  RoadMapDivImg,
  RoadMapEmptyDiv,
  RoadMapDiv,
  RoadMapGenticD1,
  RoadMapGenticD2,
  RoadMapHeadingH,
  RoadMapHeadingWrapper,
  RoadMapHeadingWrapperD1,
  RoadMapHeadingWrapperD2,
  RoadMapHeadingWrapperD3,
  RoadMapStyle,
  RoadMapEleR,
  RoadMapEleL,
  RoadMapContentEleR,
  RoadMapImageR,
  RoadMapImageL,
} from "style/Contact/index";

import Img1 from "assets/images/sparkle.avif";
import Img2 from "assets/images/sparkle.avif";
import Img3 from "assets/images/sparkle.avif";
import Img4 from "assets/images/sparkle.avif";
import Img5 from "assets/images/sparkle.avif";
import Img6 from "assets/images/sparkle.avif";
import Img7 from "assets/images/sparkle.avif";
const Projects = () => {
  const ImgStyle = {
    width: "100%",
    "max-width": "300px",
    height: "150px",
    "border-radius": "12px",
  };

  return (
    <>
      <RoadMapStyle>
        <RoadMapHeadingWrapper>
          <RoadMapHeadingWrapperD1 />
          <RoadMapHeadingWrapperD2>
            <RoadMapHeadingH>PROJECTS</RoadMapHeadingH>
            {/* <RoadMapParagraphWrapper>
              The oil is produced at the source using a robust and
              modernsolvent-free extraction system, designed in conjunction with
              Texarome's technology to obtain a high quality product.
            </RoadMapParagraphWrapper> */}
          </RoadMapHeadingWrapperD2>
          <RoadMapHeadingWrapperD3 />
        </RoadMapHeadingWrapper>

        <RoadMapDiv>
          <RoadMapGenticD1>
            <RoadMapDivImg>
              <img style={ImgStyle} src={Img1} alt="" />
            </RoadMapDivImg>
          </RoadMapGenticD1>
          <RoadMapGenticD2>
            <RoadMapContent>
              <RoadMapContentHeading>
                <RoadMapContentNumber>01.</RoadMapContentNumber>Blog Project
                (April2023-April2023 )
              </RoadMapContentHeading>
              {/* <RoadMapContentNumber>01</RoadMapContentNumber> */}
              <RoadMapContentParagraph>
                This Blog Website is made with Front-end and Back-end. In this
                website, proper authentication is used. In the front-end, I have
                used React, Redux with TypeScript using different react
                libraries. In the back-end, I have used Nodejs and Express. For
                Database, I used MongoDB which is no-sql database.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapGenticD2>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 2 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR>
            <RoadMapContentEleR>
              <RoadMapContentHeading>
                <RoadMapContentNumber>02.</RoadMapContentNumber>Music Player
                Project (May2022-May2022 )
              </RoadMapContentHeading>
              <RoadMapContentParagraph>
                This project was to develop the user interface of an online
                music player. This project was developed using HTML,CSS and
                JavaScript. To make the project responsive flex and media query
                were used.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img2} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 3 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img3} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL>
            <RoadMapContent>
              <RoadMapContentHeading>
                <RoadMapContentNumber>03.</RoadMapContentNumber>Plan-IT
              </RoadMapContentHeading>
              <RoadMapContentParagraph>
                Designed and implemented core features like task creation, story
                points, drag-and-drop dashboards, and unlimited task management,
                enhancing functionality and usability. Optimized UI with themes
                and ensured cross-device responsiveness, delivering an engaging
                and accessible user experience. Utilized Redux Toolkit, hooks,
                and React Query for efficient state management and data
                fetching, improving load time by 20% through code optimization.
                Collaborated with designers and backend developers to refine
                UI/UX and seamlessly integrate APIs for smooth functionality.
                  Link:{" "}
                  <a href="https://planit.thewitslab.com/">
                    https://planit.thewitslab.com/
                  </a>
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 4 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR style={{ transform: " translate(48px, 8px)" }}>
            <RoadMapContentEleR>
              <RoadMapContentHeading>
                <RoadMapContentNumber>04.</RoadMapContentNumber>Basic Mining
              </RoadMapContentHeading>
              <RoadMapContentParagraph>
                Collaborated closely with backend teams to integrate APIs and
                backend logic into a responsive e-commerce platform for managing
                Bitcoin mining devices. Worked on implementing dynamic user
                interfaces to handle auction management, sales processes, and
                payment method integration. Focused on delivering a seamless and
                secure transaction experience for users, ensuring that the
                frontend interfaces provided real-time updates and intuitive
                navigation throughout the purchase journey.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img4} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 5 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img5} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL style={{ transform: " translate(10px, 4px)" }}>
            <RoadMapContent>
              <RoadMapContentHeading>
                <RoadMapContentNumber>05.</RoadMapContentNumber>Earn Alliance
                Admin Portal
              </RoadMapContentHeading>
              <RoadMapContentParagraph>
                "Developed and managed a fully functional admin portal for Earn
                Alliance using React. Led the creation of an intuitive and
                responsive UI, ensuring a seamless user experience across the
                platform. Integrated APIs for real-time data management and
                created dynamic, reusable components to optimize performance and
                scalability. The admin panel efficiently handled user
                management, content updates, and badges, games, Challenges, NFT
                and contributing to the streamlined administration of the
                platform."
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 6 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR style={{ transform: " translate(40px, 1px)" }}>
            <RoadMapContentEleR>
              <RoadMapContentHeading>
                <RoadMapContentNumber>06.</RoadMapContentNumber>Portfolio
              </RoadMapContentHeading>

              <RoadMapContentParagraph>
                Developed a fully responsive and dynamic portfolio website using
                React, Ant Design, and TypeScript. Leveraged Ant Design's
                library to create a clean, modern UI that effectively showcases
                my projects, skills, and experience. Implemented TypeScript to
                ensure strong typing and maintainable code, enhancing overall
                project scalability. The portfolio includes smooth navigation,
                interactive elements, and is optimized for performance across
                all devices.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img6} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 7 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img7} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL
            style={{
              transform: "translate(0px,-2px)",
              borderRadius: "30px 0px 0px 0px",
              height: "20vw",
              borderBottom: "none",
            }}
          >
            <RoadMapContent>
              <RoadMapContentHeading>
                <RoadMapContentNumber>07.</RoadMapContentNumber>NPS (National
                Pension Scheme)
              </RoadMapContentHeading>

              <RoadMapContentParagraph>
                `Orchestrator-workflow-manager` is designed to help manage
                workflows, funnels, and rules through a set of RESTful APIs.
                This system allows users to create, read, update, and delete
                workflows, funnels, and rules efficiently.The project follows a
                modular structure to ensure scalability and maintainability
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>
      </RoadMapStyle>
    </>
  );
};

export default Projects;
