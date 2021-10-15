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
                { key: 1, img: "/Backs/image-439.jpg"},
                {key: 2, img: "/Backs/image-390.jpg"},
            {key: 7, img: "/Backs/image-406.jpg"},
            { key: 4, img: "/Backs/image-342.jpg"},
            {key: 5, img: "/Backs/image-406.jpg"},
                            {key: 6, img: "/Backs/image-390.jpg"},

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
                                            <h5>Some quick example text to build on the </h5>
                                            <p>to build on the card title and make up the bulk
                                            of the card's content.</p>
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