import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from '../assets/img/project-img5.png';
import projImg6 from '../assets/img/project-img6.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import  TrackingVisibility  from 'react-on-screen'






export const Projects = () => {

  const projects = [
    {
      title: <a style={{textDecoration: "none", color: "white"  }} href="https://princesirius.github.io/Noda-Bark-and-Board/"> Noda bark and board</a>,
      description: "Noda bark and board is a nonprofit Doggie daycare based out of charlotte. This layout is made with HTML and CSS with a little JS.",
      imgUrl: projImg1,
    },
    {
      title: <a   style={{textDecoration: "none", color: "white"  }} href="https://princesirius.github.io/space-layout/">Space Website</a>,
      description: "Built dynamic website using HTML,CSS,JS, i utlized javascript to create a tab system, instead of hard coding those pages, i used JS to dynamically grab the data and displayed them on  the different tabs. ",
      imgUrl: projImg2,
    },
    {
      title: <a  style={{textDecoration: "none", color: "white"  }} href="https://princesirius.github.io/Gym-website/" >fitness Champ</a>,
      description: "This layout was made with HTML,CSS,JS and GSAP for animation",
      imgUrl: projImg3,
    },
    {
      title: "Poke Finder",
      description: "This APi searches for Pokemon that will be suitable for a indoor lifestyle, using Fetch API and using JS classes",
      imgUrl: projImg4,
    },
    {
      title: <a style={{textDecoration: "none", color: "white"}} href="https://admindashboard-jsm.netlify.app/" >Travel Agent</a>,
      description: "Built a dynamic admin dashboard which includes Finacial charts using sync fusion UI and filter by category using React hooks,router and useEffect. Utilized tailwind css for style.",
      imgUrl: projImg5,
    },
    {
      title: "Dream Home Agnecy",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackingVisibility>
            {({isVisible}) =>
              <div className={isVisible ?  "animated__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Projects are added Monthly </p>
                </div>}
                </TrackingVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}