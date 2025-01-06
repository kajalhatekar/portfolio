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
import { Dialog } from "@mui/material";
import Img1 from "assets/images/blog-project.png";
import Img2 from "assets/images/music-player.png";
import Img3 from "assets/images/plan-it.png";
import Img4 from "assets/images/basic-mining.png";
import Img5 from "assets/images/sparkle.avif";
import Img6 from "assets/images/sparkle.avif";
import Img7 from "assets/images/sparkle.avif";
import { useState } from "react";
const Projects = () => {
  const ImgStyle = {
    width: "100%",
    "max-width": "300px",
    height: "150px",
    "border-radius": "12px",
    cursor: "pointer",
    border: "2px solid #ffff",
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>("");

  // Explicitly typing the imageSrc parameter as string
  const handleImageClick = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setCurrentImage("");
  };

  return (
    <>
      <RoadMapStyle>
        <RoadMapHeadingWrapper>
          <RoadMapHeadingWrapperD1 />
          <RoadMapHeadingWrapperD2>
            <RoadMapHeadingH>PROJECTS</RoadMapHeadingH>
          </RoadMapHeadingWrapperD2>
          <RoadMapHeadingWrapperD3 />
        </RoadMapHeadingWrapper>

        <RoadMapDiv>
          <RoadMapGenticD1>
            <RoadMapDivImg>
              <img
                style={ImgStyle}
                src={Img1}
                alt="Blog Project"
                onClick={() => handleImageClick(Img1)}
              />
            </RoadMapDivImg>
          </RoadMapGenticD1>
          <RoadMapGenticD2>
            <RoadMapContent>
              <RoadMapContentHeading>
                <RoadMapContentNumber>01.</RoadMapContentNumber>Blog Project
                (April2023-April2023 )
              </RoadMapContentHeading>
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
                Project (May2020-june2020 )
              </RoadMapContentHeading>
              <RoadMapContentParagraph>
                Developed the user interface for an online music player using
                HTML, CSS, and JavaScript. Added features like play, pause,
                skip, shuffle, and volume control to enhance functionality and
                user engagement. Designed a visually appealing and intuitive
                layout, incorporating animations for smooth transitions. Ensured
                full responsiveness using Flexbox and media queries, providing a
                seamless experience across desktops, tablets, and mobile
                devices.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img
                  style={ImgStyle}
                  src={Img2}
                  alt="Music Player Project"
                  onClick={() => handleImageClick(Img2)}
                />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 3 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img
                  style={ImgStyle}
                  src={Img3}
                  alt="Plan-IT"
                  onClick={() => handleImageClick(Img3)}
                />
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
                <div>
                  Link:{" "}
                  <a href="https://planit.thewitslab.com/">
                    https://planit.thewitslab.com/
                  </a>
                </div>
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
                Collaborated on developing a responsive e-commerce platform for
                Bitcoin mining devices using Next.js, TypeScript, and
                Material-UI. Designed interactive UI elements, integrated secure
                APIs for seamless transactions, and optimized auction and
                payment interfaces. Leveraged Redux for efficient state
                management and ensured cross-device responsiveness. Conducted
                rigorous testing to enhance platform reliability, security, and
                scalability.
                <div>
                  Link:{" "}
                  <a href="https://basicmining.com">https://basicmining.com</a>
                </div>
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img
                  style={ImgStyle}
                  src={Img4}
                  alt="Basic Mining"
                  onClick={() => handleImageClick(Img4)}
                />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 5 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
              <img
                  style={ImgStyle}
                  src={Img5}
                  alt="Earn Alliance"
                  onClick={() => handleImageClick(Img5)}
                />
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
                <img
                  style={ImgStyle}
                  src={Img6}
                  alt="Portfolio"
                  onClick={() => handleImageClick(Img6)}
                />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 7 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
              <img
                  style={ImgStyle}
                  src={Img7}
                  alt="NPS"
                  onClick={() => handleImageClick(Img7)}
                />
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
      <Dialog open={isModalOpen} onClose={handleClose}>
        <img
          src={currentImage}
          alt="Full size"
          style={{ width: "100%", height: "50vh" }}
        />
      </Dialog>
    </>
  );
};

export default Projects;
