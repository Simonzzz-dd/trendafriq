import "../styles/progects/progects.scss"
import { Container,Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react"
import Ripple from 'material-ripple-effects';



const Progects = () => {

    const ripple = new Ripple();

    function rippleEF ( e ) {
        ripple.create(e, 'dark')
    }



    const [show, setShow] = useState(false);

    let [ content, setContent ] = useState({
        key: 9, 
        img: "images/Screenshot18.png",
        h: "JINDAL MINE – TETE",
        desc: "INTERMEDIATE H-STRUCTURE 33KV DOUBLE CONDUCTOR PLANT POLES, DRESS AND STRINGING ".toLocaleLowerCase()
    })

    const handleClose = () => setShow(false);
    const handleShow = (e, ele ) => { 
        setShow(true)
        setContent(ele)
        rippleEF(e)
    };
    const Images = [
                {
                    key: 8, 
                    img: "images/Screenshot17.png",
                    h: "SCO 20MVA SUBSTATION INSTALLATION OF 1250KVA POWER TRANSFORMER,SWITCHGERAS, CONTROL AND POWER CABLES INCLUDING FOR SCO MACHINE",
                    desc: "SCO 20MVA SUBSTATION INSTALLATION OF 1250KVA POWER TRANSFORMER,SWITCHGERAS, CONTROL AND POWER CABLES INCLUDING FOR SCO MACHINE".toLocaleLowerCase()
                },

                {
                    key: 3, 
                    img: "images/Screenshot18.png",
                    h: "JINDAL MINE – TETE",
                    desc: "INTERMEDIATE H-STRUCTURE 33KV DOUBLE CONDUCTOR PLANT POLES, DRESS AND STRINGING ".toLocaleLowerCase()
                },
                {
                    key: 2, 
                    img: "images/Screenshot.png",
                    h: "NACALA – A - VELHA PORT",
                    desc: "CLN - SHIP LOADERS INSTALLATION OF ALL CONTROL AND POWER CABLES, INCLUNDING INSTRUMENTAION SYSTEM".toLocaleLowerCase()
                },
                {
                    key: 1, 
                    img: "images/Screenshot9.png",
                    h: "AGGREKO GAS POWER PLANT –RESSANO GARCIA",
                    desc: "PULLING OF XLPE 1X630MM2; 160/275KV –AGGREKO GAS POWER PLANT".toLocaleLowerCase()
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
    ]



    return ( 
    <> 
        <div className="progects">
        <Container>
            <p style={{color: "#dddddd"}}>Progects Gallery</p>
            <Row className="progectsRow" xs={1} md={2} lg={3} >
            {
                Images.map((ele, i) => {
                    return (
                        <Col key={ele.key }  onClick={(e) => handleShow(e,ele)}> 
                            <div className="relative">
                                <Card >
                                    <Card.Img variant="top" src={ele.img}/>
                                    <Card.Body>
                                    <Card.Text>
                                        <b>{ele.h.length > 35 ? ele.h.toLocaleLowerCase().slice(0,36) + "..." : ele.h.toLowerCase()}</b>
                                        {/* <p>{ele.desc.toLowerCase()}</p> */}
                                    </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                            </div> 
                        </Col>)
                })
            }

            </Row>
        </Container>


        {/* Popup */}
        <>
    

        <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered            
            show={show}
            onHide={handleClose}
            // backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title> Trend Afriq</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <b>{content.h}</b> <br/>
                {content.desc}
            </Modal.Body>
            <Modal.Footer>
                <div className="myModal">
                    <img src={content.img} alt={content.desc} />
                </div>
            </Modal.Footer>
        </Modal>
        </>
        </div>
    </> );
}
 
export default Progects;