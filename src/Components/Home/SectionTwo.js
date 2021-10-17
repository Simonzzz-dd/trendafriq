import { Container } from 'react-bootstrap';

import "../../styles/SectionTwo.scss"



const Section2 = () => {

    
    return ( 
        <>
            <div className="s2 center1" style={{backgroundImage: "url("+"'/trendedited/PR.png')"}}>
                <div className="s2Content center1">
                <Container className="center1">
                    <h5>BREEF SUMMARY OF OUR ACTIVITY</h5>
                    <p>
                        Trend Afriq, Lda Mozambique based company initially constituted in the electrical and instrumentation field since 2009. During the period in reference, Trend Afriq was engaged specifically in Tete Province in the construction of distribution, transmission power lines and substations. The Company was registered as a legal entity June in 2010. Trend Afriq Lda, is distinguished by Multi Discipline Capabilities and Technical Expertise and combined with our Hands-on approach we ensure that our clients receive the most Cost Effective, fit for purpose and Professional Service in the Construction Industry.
                    </p>                    
                </Container>
                <div className="decoration">
                    <div className="s1G1" style={{backgroundImage: "url("+"'/trendedited/grid.png')"}}></div>
                    <div className="s1G2" style={{backgroundImage: "url("+"'/trendedited/grid.png')"}}></div>
                </div>
                </div>
            </div>    
        </>
     );
}
 
export default Section2;