import { useState,useEffect } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Full Stack Engineer", "Web Developer", "Frontend Developer", "Backend Developer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100 )
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(() => {

           tick(); 
        }, delta);

     return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1)
        setText(updatedText);


        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    






    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
              {({isVisible}) =>
              <div className={isVisible ?  "animate__animated animate__fadeIn" : ""}>
              <span className="tagline"> Welcome to my Portfolio</span>
              <h1>
                {`Hi, i'm AL-Zumar `}
                <span className="wrap">{text}</span>
              </h1>
              <p>
              I'm based in Charlotte NC;  I specialize in Full stack Web development. HTML, CSS, JavaScript,MERN. 
               I am very passionate about my career and anime. 
               Yes, I will ask you what your favorite anime during the process, 
               if you like anime of course. I also belong to the Great house of Ravenclaw, Want to link up in SWTOR?
               mention it anytime during the process! 
               Oh, and btw One Piece is the greatest anime of all time!
              </p>
              <button onClick={() => console.log('connect') }>Lets Connect <ArrowRightCircle size={25} /> </button>
              </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Header img"   />

            </Col>
          </Row>
        </Container>
      </section>
    );

}