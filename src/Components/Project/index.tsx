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
      <RoadMapStyle id="project">
        <RoadMapHeadingWrapper>
          <RoadMapHeadingWrapperD1 />
          <RoadMapHeadingWrapperD2>
            <RoadMapHeadingH>Projects</RoadMapHeadingH>
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
                <RoadMapContentNumber>
                  01. Blog Project (April2023-April2023 )
                </RoadMapContentNumber>
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
                <RoadMapContentNumber>
                  02. Music Player Project (May2020-june2020 )
                </RoadMapContentNumber>
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
                <RoadMapContentNumber>03. Plan-IT</RoadMapContentNumber>
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
                <RoadMapContentNumber>04. Basic Mining</RoadMapContentNumber>
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
              transform: "translate(0px,5px)",
              borderRadius: "30px 0px 0px 0px",
              height: "10vw",
              borderBottom: "none",
            }}
          >
            <RoadMapContent>
              <RoadMapContentHeading>
                <RoadMapContentNumber>
                  07. NPS (National Pension Scheme)
                </RoadMapContentNumber>
              </RoadMapContentHeading>

              <RoadMapContentParagraph id="contact">
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
