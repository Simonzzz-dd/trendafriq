import "../styles/progects/progects.scss"
import { Container,Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react"



const Progects = () => {


    const [show, setShow] = useState(false);

    let [ content, setContent ] = useState({
        key: 9, 
        img: "images/Screenshot18.png",
        h: "JINDAL MINE – TETE",
        desc: "INTERMEDIATE H-STRUCTURE 33KV DOUBLE CONDUCTOR PLANT POLES, DRESS AND STRINGING ".toLocaleLowerCase()
    })

    const handleClose = () => setShow(false);
    const handleShow = ( ele ) => { 
        setShow(true)
        setContent(ele)
    };
    const Images = [
                {
                    key: 8, 
                    img: "images/Screenshot17.png",
                    h: "SCO 20MVA SUBSTATION INSTALLATION OF 1250KVA POWER TRANSFORMER,SWITCHGERAS, CONTROL AND POWER CABLES INCLUDING FOR SCO MACHINE",
                    desc: "SCO 20MVA SUBSTATION INSTALLATION OF 1250KVA POWER TRANSFORMER,SWITCHGERAS, CONTROL AND POWER CABLES INCLUDING FOR SCO MACHINE".toLocaleLowerCase()
                },
                {
                    key: 9, 
                    img: "images/Screenshot18.png",
                    h: "JINDAL MINE – TETE",
                    desc: "INTERMEDIATE H-STRUCTURE 33KV DOUBLE CONDUCTOR PLANT POLES, DRESS AND STRINGING ".toLocaleLowerCase()
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
            <Row xs={1} md={2} lg={3}>
            {
                Images.map((ele, i) => {
                    return (
                        <Col key={ele.key}> 
                        <div className="relative">
                            <Card >
                                <Card.Img onClick={() => handleShow(ele)} variant="top" src={ele.img}/>
                                <Card.Body>
                                <Card.Text>
                                    <b>{ele.h.toLocaleLowerCase()}</b>
                                    <p>{ele.desc.toLowerCase()}</p>
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
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered            
            show={show}
            onHide={handleClose}
            // backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>{content.h.slice(0,25)+ "..." }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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