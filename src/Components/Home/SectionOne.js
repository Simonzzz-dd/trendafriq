import "../../styles/SectionOne.scss"
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Section1 = () => {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        // const tl = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: "#about_",            
        //         // toggleActions: "restart pause restart none",
        //         scrub: true,
        //         start: "top top",
        //         end: "+=200",
        //     }
        // })
        // tl.to(".clip1", { duration: .9,ease: "none", width: "100vw", height: "90vh"})
            // .to(".desc", { duration: .9,ease: "none", opacity: .9},"<")


    
    })
    return ( 
        <>
        <div className="intro-">
            <Row>
            <Col className="tabletMax" sm style={{backgroundImage: "url('https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80')"}}></Col>
            <Col sm >
                <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/Backs/alt.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/Backs/construct.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                </Carousel>
            </Col>
            <div className="homePage--">
                <div className="since"> 
                    <div className="homePageImg">
                        <img src="/trendLogo/trendLogo.png" alt="logo" />
                    </div>
                    {/* <p>&#9679; since 2009 &#9679;</p> */}
                </div>
            </div>            
            </Row>
        </div>
        <div className="OurBrand">
            <Container>
                  <Row>
                    <Col md> <h5>OUR MISSION</h5>
                        <p>Shape the future, understand design concepts, commit to achieving the goals of our clients, creating unprecedent value and oppurtunity for our employees, save the ecosystem .
                        </p>
                    </Col>
                    <Col md className="BD">
                        <h5>OUR VISION</h5>
                        <p>
                            At Trend Afriq , our vision is to be the country’s best company in the eyes of our customers, shareholders, communities and people. Deliver the best we can by
                            always keeping Trend Afriq’s values
                            top of mind.
                        </p>
                    </Col>
                    <Col md>
                        <h5>OUR Values</h5>
                        <div >
                            Respect for People’s Dignity, Empower Individuals, Commitment, Improvement,Leadership by Example,Dependability, Team Work.                           
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
        </>
     );
}
 
export default Section1;

