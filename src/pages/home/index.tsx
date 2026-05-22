import { useEffect, useState } from "react";
import Experience from "Components/Experience";
import Loader from "Components/Loader";
import StarryBackground from "Components/Spiral";
import Contact from "Components/Contact";
import Navbar from "Components/Navbar";
import HomeSec from "Components/Home";
import Introduction from "Components/Introduction";
import SkillsSec from "Components/Skills";
import Educations from "Components/Education";
import Projects from "Components/Project";
import Footer from "Components/Footer";
import ToolsSection from "Components/Tools";
import MobileViewProjects from "Components/Project/mobile-view";
import { Container } from "style/Navbar";
import { TestimonialDivider } from "Components/Devider";
import { RedesignNotice } from "Components/RedesignNotice";
import { TestimonialSectionTransition } from "Components/TestimonialSectionTransition/TestimonialSectionTransition";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearInterval(timer);
    }, 2000);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <Navbar />
      <RedesignNotice />
      {/* <ScrollText content={content} /> */}
      <HomeSec />
      <Introduction />
      <TestimonialSectionTransition />
      <SkillsSec />
      <ToolsSection />
      <Educations />
      <TestimonialDivider position="top" />
      <Experience />
      {isMobile ? <MobileViewProjects /> : <Projects />}
      <StarryBackground />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
