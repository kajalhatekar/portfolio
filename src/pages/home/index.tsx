import Experience from "Components/Experience";
import Contact from "Components/Contact";
import Navbar from "Components/Navbar";
import HomeSec from "Components/Home";
import Introduction from "Components/Introduction";
import SkillsSec from "Components/Skills";
import Projects from "Components/Project";
import Footer from "Components/Footer";
import ToolsSection from "Components/Tools";
import { Container } from "style/Navbar";
import Testimonials from "Components/Testimonials";
import { Wrapper } from "style/Education";

const Home: React.FC = () => {
  return (
    <Container>
      <Navbar />
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
