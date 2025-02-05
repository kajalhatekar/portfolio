import IMG1 from "assets/images/linkedin-clone.png";
import IMG2 from "assets/images/blog-project.png";
import IMG3 from "assets/images/food-delivery.png";
import IMG4 from "assets/images/plan-it.png";
import IMG5 from "assets/images/basic-mining.png";
import {
  PortfolioContainer,
  PortfolioItem,
  PortfolioImage,
  ServiceBoxHeader,
  ServiceBoxP,
  MainContainer,
  DataWrapper,
} from "style/Project/mobile-view";
import { Heading } from "style/Skill";
import { ProjectsLink } from "style/Contact";

const data = [
  {
    id: 1,
    image: IMG1,
    project_name: "Linkedin Clone",
    title:
      "This is a LinkedIn Clone application built using modern web development technologies. The app replicates key features of LinkedIn, providing a social platform for professional networking.",
    github: "https://www.linkedin.com/in/kajal-raj",
  },
  {
    id: 2,
    image: IMG2,
    project_name: "Blog Project",
    title:
      "A full-stack blog website with authentication, a React-Redux TypeScript frontend, Node.js backend, and features like blog management, user interactions, and dark/light mode.",
    github: "",
  },
  {
    id: 3,
    image: IMG3,
    project_name: "Food Delivery",
    title:
      "This is a Food Delivery built using modern web development technologies like React, Redux, and Bootstrap, featuring a food menu where users can add items to their cart, view and manage cart contents, adjust quantities, and successfully place orders and fully responsive.",
    github: "https://github.com/kaaju-11/food-delivery",
  },
  {
    id: 4,
    image: IMG4,
    project_name: "Plan-IT",
    title:
      "Developed core features like task creation, drag-and-drop dashboards, and unlimited task management, optimized UI with themes and responsiveness, and enhanced performance with Redux Toolkit, React Query, and code optimization, improving load time by 20%.",
    github: "https://planit.thewitslab.com/",
  },
  {
    id: 5,
    image: IMG5,
    project_name: "Basic Mining",
    title:
      "Developed a responsive e-commerce platform for Bitcoin mining devices using Next.js, TypeScript, and Material-UI, with interactive UI, secure transactions, optimized payment interfaces, and cross-device responsiveness.",
    github: "https://basicmining.com",
  },
];

const MobileViewProjects = () => {
  return (
    <MainContainer id="project">
      <DataWrapper>
        <Heading>Projects</Heading>
        <PortfolioContainer>
          {data.map(({ id, image, project_name, title, github }) => (
            <PortfolioItem key={id}>
              <PortfolioImage>
                <img src={image} alt={title} />
              </PortfolioImage>
              <ServiceBoxHeader style={{ textAlign: "center" }}>
                {project_name}
              </ServiceBoxHeader>
              <ServiceBoxP>{title}</ServiceBoxP>
              <ProjectsLink
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </ProjectsLink>
            </PortfolioItem>
          ))}
        </PortfolioContainer>
      </DataWrapper>
    </MainContainer>
  );
};

export default MobileViewProjects;
