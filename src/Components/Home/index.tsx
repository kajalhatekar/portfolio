import {AiOutlineGithub } from "react-icons/ai";
import { MdEmail, MdDownload } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
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
  SocialSec,
  AnchorTag,
  RightContainer,
} from "style/Home";
import { useEffect, useState } from "react";

const HomeSec = () => {
  // const saveFile = () => {
  //   fileSaver.saveAs(process.env.PUBLIC_URL + "/resume/cv.pdf", "MyCV.pdf");
  // };
  const [isMobile, setIsMobile] = useState(false);

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
            <AnchorTag href="https://www.linkedin.com/in/kajal-raj">
              <FaLinkedinIn />
            </AnchorTag>
            <AnchorTag href="#contact">
              <MdEmail />
            </AnchorTag>
            <AnchorTag href="https://github.com/kaaju-11">
              <AiOutlineGithub />
            </AnchorTag>
            {/* <AnchorTag href="#">
              <RiGitlabFill />
            </AnchorTag> */}
          </SocialSec>

          <ButtonContainer>
            {/* <ConnectButton
              href="https://www.linkedin.com/in/kajal-raj"
              rel="noopener noreferrer"
            >
              Let's Connect
              <GrSend />
            </ConnectButton> */}
            <FButton
              target="_blank"
              rel="noopener noreferrer"
              href={`${process.env.PUBLIC_URL}/resume/cv.pdf`}
            >
              Resume
              <MdDownload />
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
