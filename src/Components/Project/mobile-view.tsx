import IMG1 from "assets/images/blog-project.png";
import IMG2 from "assets/images/add-to-cart.png";
import IMG3 from "assets/images/plan-it.png";
import IMG4 from "assets/images/basic-mining.png";
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

const data = [
  {
    id: 1,
    image: IMG1,
    project_name: "Blog Project",
    title:
      "A full-stack blog website with authentication, a React-Redux TypeScript frontend, Node.js backend, and features like blog management, user interactions, and dark/light mode.",
    github: "https://github.com/atharvahatekar/Movie-Recommendation-System",
  },
  {
    id: 2,
    image: IMG2,
    project_name: "Add To  Cart",
    title:
      "I developed this project using React, Redux, and Bootstrap, featuring a food menu where users can add items to their cart, view and manage cart contents, adjust quantities, and successfully place orders.",
    github: "https://github.com/atharvahatekar/Customer-Churn-Prediction",
  },
  {
    id: 3,
    image: IMG3,
    project_name: "Plan-IT",
    title:
      "Developed core features like task creation, drag-and-drop dashboards, and unlimited task management, optimized UI with themes and responsiveness, and enhanced performance with Redux Toolkit, React Query, and code optimization, improving load time by 20%.",
    github: "https://planit.thewitslab.com/",
  },
  {
    id: 4,
    image: IMG4,
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
              {/* <ProjectLinks>
                <button>
                  <A
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </A>
                </button>
              </ProjectLinks> */}
            </PortfolioItem>
          ))}
        </PortfolioContainer>
      </DataWrapper>
    </MainContainer>
  );
};

export default MobileViewProjects;
