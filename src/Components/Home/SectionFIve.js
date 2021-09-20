import {  Container, Card } from 'react-bootstrap';
import "../../styles/SectionThree.scss"



const SectionFive = () => {
    return ( 
        <>

            <div className="align-Center-">
                <Container className="s4Center">
                    <div className="container-4">
                        <h2>
                            MARRUPA  2019
                        </h2>                    
                    </div>
    
                        <Card>
                            <Card.Img variant="top" src="/Backs/Marupa.jpg" />
                            <Card.Body>
                            <Card.Title> <h5>REPARATIONS FOR STRINGING 110KV LINE CUAMBA </h5></Card.Title>
                                <Card.Text style={{ fontSize: ".8rem"}}>
                                    D{("RESSING AND STRINGING OF 240KM OF 110KV LINE + EARTH WIRE + OPGW").toLocaleLowerCase()}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                </Container>
            </div>
    
        </>
     );
}
 
export default SectionFive ;