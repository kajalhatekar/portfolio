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
import { Container } from "style/Navbar";
import { RedesignNotice } from "Components/RedesignNotice";
import Testimonials from "Components/Testimonials";
import { Wrapper } from "style/Education";

const Home: React.FC = () => {
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
      {/* <TestimonialDivider position="top" /> */}
      {/* <Educations /> */}
      <Projects />
      <Wrapper>
        <Experience />
        <Contact />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Home;
