import { useEffect, useState } from "react";
import Experience from "Components/Experience";
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
import { TestimonialDivider } from "Components/Devider";
import { Container } from "style/Navbar";
import { RedesignNotice } from "Components/RedesignNotice";
import Testimonials from "Components/Testimonials";

const Home: React.FC = () => {
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

  return (
    <Container>
      <Navbar />
      <RedesignNotice />
      {/* <ScrollText content={content} /> */}
      <HomeSec />
      <Introduction />
      <Testimonials />
      <SkillsSec />
      <ToolsSection />
      <Educations />
      <TestimonialDivider position="top" />
      <Experience />
      {isMobile ? <MobileViewProjects /> : <Projects />}
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;
