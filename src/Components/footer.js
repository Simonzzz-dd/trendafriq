import { Container, Col,Row} from 'react-bootstrap';

const Footer = () => {
    return ( 
        <div>
            <Container>

            <Row>
                <Col md>
                    CONTACT US: <br/>
                    +258 21750315
                </Col>
                <Col md={6}>
                    LOCATION: <br />
                    Av. Mario Esteves Coluna, 611,
                    Matola - Maputo.
                </Col>
        
            </Row>
            </Container>
        </div>
     );
}
 
export default Footer;