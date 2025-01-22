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
  ProjectsLink,
} from "style/Contact/index";
import { Dialog } from "@mui/material";
import Img1 from "assets/images/linkedin-clone.png";
import Img2 from "assets/images/blog-project.png";
import Img3 from "assets/images/food-delivery.png";
import Img4 from "assets/images/basic-mining.png";
import Img5 from "assets/images/plan-it.png";
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
                alt="Linkedin Clone"
                onClick={() => handleImageClick(Img1)}
              />
            </RoadMapDivImg>
          </RoadMapGenticD1>
          <RoadMapGenticD2>
            <RoadMapContent>
              <RoadMapContentHeading>
                <RoadMapContentNumber>01. Linkedin Clone</RoadMapContentNumber>
              </RoadMapContentHeading>
              <RoadMapContentParagraph>
                This is a LinkedIn Clone application built using modern web
                development technologies. The app replicates key features of
                LinkedIn, providing a social platform for professional
                networking.
                <ProjectsLink
                  href="https://www.linkedin.com/in/kajal-raj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </ProjectsLink>
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
                <RoadMapContentNumber>02. Blog Project</RoadMapContentNumber>
              </RoadMapContentHeading>
              <RoadMapContentParagraph>
                This Blog Website is made with Front-end and Back-end. In this
                website, proper authentication is used. In the front-end, I have
                used React, Redux with TypeScript using different react
                libraries. In the back-end, I have used Nodejs and Express. For
                Database, I used MongoDB which is no-sql database.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img
                  style={ImgStyle}
                  src={Img2}
                  alt="Blog Project"
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
                  alt="Food Delivery"
                  onClick={() => handleImageClick(Img3)}
                />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL>
            <RoadMapContent>
              <RoadMapContentHeading>
                <RoadMapContentNumber>03. Food Delivery</RoadMapContentNumber>
              </RoadMapContentHeading>
              <RoadMapContentParagraph>
                This is a Food Deleviry built using modern web development
                technologies like React, Redux, and Bootstrap, featuring a food
                menu where users can add items to their cart, view and manage
                cart contents, adjust quantities, and successfully place
                orders and fully responsive.
                <ProjectsLink
                  href="https://github.com/kaaju-11/food-delivery"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </ProjectsLink>
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
                <ProjectsLink
                  href="https://basicmining.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </ProjectsLink>
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
                  src={Img5}
                  alt="Plan-IT"
                  onClick={() => handleImageClick(Img5)}
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
                <RoadMapContentNumber>05. Plan-IT</RoadMapContentNumber>
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
                <ProjectsLink
                  href="https://planit.thewitslab.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </ProjectsLink>
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
