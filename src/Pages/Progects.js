import "../styles/progects/progects.scss"
import { Container,Row, Col, Card } from "react-bootstrap";



const Progects = () => {
    const Images = [
        { image: "/Backs/track.jpg"},
        { image: "/Backs/image-390.jpg"},
        { image: "/Backs/PR.jpg"},    
            { image: "/Backs/image-342.jpg"},
        { image: "/Backs/electrical.jpg"},
            { image: "/Backs/image-406.jpg"},
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
                        <Col key={ele.image}> 
                        <div className="relative">
                            <Card>
                                <Card.Img variant="top" src={ele.image}/>
                                <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </div> 
        </Col>)
                })
            }

            </Row>
        </Container>
        </div>
    </> );
}
 
export default Progects;