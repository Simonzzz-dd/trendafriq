import { Container, Col,Row} from 'react-bootstrap';

const Footer = () => {
    return ( 
        <div>
            <Container>

            <Row>
                <Col md>
                    CONTACT US: <br/>
                    fax: +258 21750315 <br/>
                    Email: info@trend-afriq.co.mz
                </Col>
                <Col md={6}>
                    LOCATION: <br />
                    Av. Mario Esteves Coluna, 611,
                    Matola - Maputo.
                </Col>
        
            </Row>
            <div className="poweredBy"> &copy; Copyright 2021 Zimmo</div>
            </Container>
        </div>
     );
}
 
export default Footer;