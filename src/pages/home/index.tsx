import Loader from "Components/Loader";
import StarryBackground from "Components/Spiral";
import { useEffect, useState } from "react";
import ContactHome from "views/Contact";
import EducationHome from "views/Education";
import FooterHome from "views/Footer";
import HomePge from "views/Home";
import NavHome from "views/Navbar";
import SkillHome from "views/Skill";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearInterval(timer);
    }, 1000);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <div>
        <NavHome />
        <div id="home">
          <HomePge />
        </div>
        <div id="skills">
          <SkillHome />
        </div>
        <div id="education">
          <EducationHome />
        </div>
        <div id="background">
          <StarryBackground />
        </div>
        <div id="contact">
          <ContactHome />
        </div>
        <FooterHome />
      </div>
    </div>
  );
};

export default Home;
