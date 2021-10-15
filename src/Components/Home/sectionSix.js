import {  Container, Row, Col, Card } from 'react-bootstrap';
import "../../styles/SectionSix.scss"
import Ripple from 'material-ripple-effects';
import { Link } from 'react-router-dom';


const SectionSix = () => {

    const ripple = new Ripple();
    function rippleEF ( e ) {
        ripple.create(e, 'dark')
    }


    const ImagesArray = {
        one: 
            [
                { 
                    key: 1, img:"/images/Screenshot1.png",
                    h: "110/33KV NAMIALO SUBSTATION - 2018",
                    desc: "ERRECTION OF STEEL STUCTURES, ASSEMBLE ISOLATORS, CB’S VTS AND CT’S, ISTALL CONTROL AND POWER CABLES , CONTROL AND PROITECTION EQUIPMENT AND 33KV SWITCHGERAS".toLocaleLowerCase()},
                {
                    key: 2, img: "/images/Screenshot12.png",
                    h: "NACALA – A - VELHA PORT",
                    desc: "NACALA PORT E-HOUSE WITH MINIATURE SUBSTATIONS, TRANSFORMERS AND STACKER RE -CLAIMER COMPLETE INSTALLATIONOF A CONTENAINERIZED SUBSTATION (CIVILS, TRANSPORTAION AND POSITIONING ON FOUNDATION, WSWITCHGEARS, LIGHTING AND HAVAC SYSTEM".toLocaleLowerCase()
                },
                {
                    key: 7, 
                    img: "images/Screenshot20.png",
                    h: "STRINGING",
                    desc: "WE PERFORMED TOWER ERRECTION, DRESSING AND PULLING OF PILOT AND LINE STRINGING".toLocaleLowerCase()
                },
                { 
                    key: 4, 
                    img: "/images/Screenshot7.png",
                    h: "40MVA, 110/33KV NAMIALO SUBSTATION – VACCUM AND OIL PURIFICATION - 2018",
                    desc: "40MVA, 110/33KV NAMIALO SUBSTATION – VACCUM AND OIL PURIFICATION - 2018".toLocaleLowerCase()
                },
                {   key: 5,
                    img: "/images/Screenshot14.png",
                    h: "NACALA – A - VELHA PORT",
                    desc: "NACALA COAL TERMINAL SHIP LOADER CONVEYORS INSTALLATION OF ALL CONTROL AND POWER CABLES, INCLUNDING INSTRUMENTAION SYSTEM".toLocaleLowerCase()
                },
                {
                    key: 6, 
                    img: "/images/Screenshot8.png",
                    h: "INDUSTRIAL WATER LINE–CLN– NACALA – VELHA – 2016",
                    desc: "WATER PUMP STATION FOR DUST SUPPRESSION OF COAL STOCK YARD SUPPLY AND INSTALL WATER CUNDUITS, MOTORS, PUMPS AND PROFIBUS".toLocaleLowerCase()        
                },

            ],
        two:            
         [

        ]
    }
    return ( 
        <>
        <Container style={{minHeight: "100vh"}}>
            <Row style={{display: "flex", justifyContent: "space-around"}}>
                {
                    ImagesArray.one.map((ele )=>{
                        return (
                            <Col md={6} key={ele.key}>
                                <div className="colDiv">
                                    <Card>
                                        <Card.Body>
                                        <Card.Text>
                                            <h5>{ ele.h } </h5>
                                            <p>{ele.desc}</p>
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Img variant="bottom" src={`${ele.img}`}/>
                                    </Card>                                    
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>


            <Link className="a "  onClick={rippleEF} to="/Progects"> <div className="moreProgects">More Of Our Progects </div> </Link>
        </Container>
        </>
     );
}
 
export default SectionSix ;