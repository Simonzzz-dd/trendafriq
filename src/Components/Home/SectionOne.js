import "../../styles/SectionOne.scss"
import { Container, Row, Col, Carousel, Spinner } from 'react-bootstrap';
import { useEffect, useState } from "react";
import Ripple from 'material-ripple-effects';
import { useHistory } from "react-router-dom"







const Section1 = () => {


    const history = useHistory()
    let [isLoading, setLoading ] = useState(true)
    const ripple = new Ripple();
    function rippleEF ( e ) {
        ripple.create(e, 'dark')
        setTimeout(()=> history.push("/contactUs"), 500)
    }

    useEffect(()=>{
        const myImage = new Image( 100, 100)
            myImage.onload = function () {
                setTimeout(()=>{
                    setLoading(false)    
            },300)   
        };

        myImage.src ='https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80'
        
    })
    return ( 
        <>

        
        {   isLoading === true ? (
            <div  className="spiner_ absolute-pos">
                <Spinner animation="border" size="md" />
            </div>
        ) : <> </>
        }
            <>
                <div className="SectionOneContainer">
                    <Container className="s1Container center1">
                        <div className="s1HomeDesc center1">
                            {/* <div className="sp">Trend-Afriq-Lda</div> */}
                            <h2>POWER AND CONSTRUCTION COMPANY</h2>
                            <div className="s1btn" onClick={(e)=>rippleEF(e)}>Contact Us</div>
                        </div>
                    </Container>
                    <div  className="s1img" style={{backgroundImage: "url("+"'/trendedited/trendaf.png')"}}>
                            
                    </div>        
                    <div className="logoS1 center1">
                        <div className="logo1" style={{backgroundImage: "url("+"'/trendLogo/trendlogo.png')"}}></div>
                    </div>
                </div>
                <div className="mission">
                    <Container>
                        <Row>
                            <Col md>
                                <b>Mission</b><div className="b"></div>

                                <p>
                                    Shape the future, understand design concepts, commit to achieving the goals of our clients, creating unprecedent value and oppurtunity for our employees, save the ecosystem .
                                </p>
                            </Col>
                            <Col md>
                                <b>Vision</b><div className="b"></div>
                                <p>At Trend Afriq , our vision is to be the country’s best company in the eyes of our customers, shareholders, communities and people. Deliver the best we can by always keeping Trend Afriq’s values top of mind.</p>
                            </Col>
                            <Col md>
                                <b>Values</b><div className="b"></div>
                                <p>
                                    Respect for People’s Dignity, Empower Individuals, Commitment, Improvement,Leadership by Example,Dependability, Team Work.
                                </p>
                            </Col>
                        </Row>
                        <div className="arrowdown">
                            <img src="/trendedited/line.svg" alt="" />
                        </div>
                    </Container>
                </div>
            </>

        </>
     );
}
 
export default Section1;

