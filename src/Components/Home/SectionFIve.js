import {  Container, Card } from 'react-bootstrap';
import "../../styles/SectionThree.scss"



const SectionFive = () => {
    return ( 
        <>
            <div className="fixedpos two" style={{backgroundImage: "url("+"'/trendedited/velhaport.png')"}}>
                <div className="s4" >
                    <Container className="s4Center">
                        <div className="contentS4">
                        <div className="borderS4"></div>
                        <div className="s4desc">
                            <h5>NACALA – 2014/2015</h5>
                            <h5>NACALA – A - VELHA PORT </h5>
                            <p>Plant poles and string 22kv abc conductor from the 110/22kv main substation 22/6.6/3.3kv substation</p>
                        </div>
                        </div>
                    </Container>
                </div>
            </div>
    
        </>
     );
}
 
export default SectionFive ;