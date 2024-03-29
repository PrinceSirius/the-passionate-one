import { Container, Col, Row  } from "react-bootstrap"
import logo from '../assets/img/logo.svg'
import navIcon from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const Footer = () => {


    return (

        <Container className="footer" >
            <Row className="align-item-center" >
                <Col sm={6}>
                   <img src={logo} alt="Logo" />
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">

                          <a href="https://www.linkedin.com/in/al-zumar-gibson-963890222/"> <img src={navIcon} alt="" /></a>
                          <a href="https://twitter.com/ALZumarGibson"> <img src={navIcon2} alt="" /></a>
                          {/* <a href=""> <img src={navIcon3} alt="" /></a> */}
                    </div>
                   <p>CopyRight 2022. All Right Reserved</p>
                </Col>
            </Row>
        </Container>

    )
}