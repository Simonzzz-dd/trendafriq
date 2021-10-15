import {   Row, Col } from 'react-bootstrap';
import "../../styles/SectionTwo.scss"
import Carrousel_ from './carrousel';
import Ripple from 'material-ripple-effects';
import { Link } from 'react-router-dom';

const Section2 = () => {

    const ripple = new Ripple();

    function rippleEF ( e ) {
        ripple.create(e, 'dark')
    }
    return ( 
        <>
        <div className="container-21">
              <Row xs={1} md={2}>
                <Col className="s2-col" md={6}>
                    <div className="content--">
                        <h5>Breaf Summary Of Our Activity</h5>
                    
                        <p>
                            Trend Afriq, Lda Mozambique based company initially constituted in the electrical and instrumentation field since 2009.
                            During the period in reference, Trend Afriq was engaged specifically in Tete Province in the construction of distribution,
                            transmission power lines and substations. The Company was registered as a legal entity June in 2010.
                            Trend Afriq Lda, is distinguished by Multi Discipline Capabilities and Technical Expertise and combined with our Hands-on
                            approach we ensure that our clients receive the most Cost Effective, fit for purpose and Professional Service in the
                            Construction Industry.
                        </p>
                    
                    </div>
                </Col>
                <Col className="s2-col" md={6}>
                    <div className="content--">
                        <Carrousel_ ></Carrousel_>
                    </div>
                </Col>
            </Row>

        </div>
        </>
     );
}
 
export default Section2;