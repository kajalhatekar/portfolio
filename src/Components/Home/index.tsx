import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import Typewriter from "typewriter-effect";
// import home from "assets/home.mp4";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  MainContainer,
  Container,
  LeftContainer,
  Proffesion,
  Paragraph,
  ButtonContainer,
  FButton,
  ConnectButton,
  SocialSec,
  AnkerTag,
  RightContainer,
} from "style/Home";
import DownloadIcon from "assets/svg/DownloadIcon";
import { useEffect, useState } from "react";

const HomeSec = () => {
  // const saveFile = () => {
  //   fileSaver.saveAs(process.env.PUBLIC_URL + "/resume/cv.pdf", "MyCV.pdf");
  // };
  const [isMobile, setIsMobile] = useState(false);
    const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1050);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <MainContainer id="home">
      <Container>
        <LeftContainer>
          <Proffesion>
            <h3>Hello There!</h3>
            <h3>
              I'm a{" "}
              <span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 45,
                    strings: [
                      "Web Developer",
                      "Software Engineer",
                      "Frontend Developer",
                      // "Open Source Contributor",
                      "UI Developer",
                    ],
                  }}
                />
              </span>
            </h3>
          </Proffesion>
          <Paragraph>
            Hi, I'm Kajal Raj, A Web Developer with 2.6 years of
            experience Skilled in creating user-centric web applications. Proficient in agile
            methodologies and delivering quality results on time.
          </Paragraph>
          <SocialSec>
            {/* <AnkerTag href="#">
              <FaFacebookF />
            </AnkerTag> */}
            <AnkerTag href="https://www.instagram.com/kaaju_.12/?next=%2F&hl=en">
              <RiInstagramFill />
            </AnkerTag>
            <AnkerTag href="#contact" onClick={() => handleLinkClick("contact")}>
              <MdEmail />
            </AnkerTag>
            <AnkerTag href="https://github.com/kaaju-11">
              <AiOutlineGithub />
            </AnkerTag>
            {/* <AnkerTag href="#">
              <RiGitlabFill />
            </AnkerTag> */}
          </SocialSec>

          <ButtonContainer>
            <ConnectButton
              href="https://www.linkedin.com/in/kajal-raj"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Connect
              <GrSend />
            </ConnectButton>
            <FButton
              target="_blank"
              rel="noopener noreferrer"
              href={`${process.env.PUBLIC_URL}/resume/cv.pdf`}
            >
              Resume
              <DownloadIcon />
            </FButton>
          </ButtonContainer>
        </LeftContainer>
        <RightContainer>
          {/* <BoxContainer></BoxContainer>
          <SecondBoxContainer></SecondBoxContainer>
          
          <Image src={portimage} /> */}
          {isMobile ? (
            ""
          ) : (
            <DotLottieReact
              src="https://lottie.host/44325f2f-8aad-4728-9d64-221fb243e31b/4hOpUuUWT3.lottie"
              loop
              autoplay
              style={{ width: "unset", height: "unset" }}
            />
          )}
        </RightContainer>
      </Container>
    </MainContainer>
  );
};

export default HomeSec;
