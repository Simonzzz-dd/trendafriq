import {  Container, Card } from 'react-bootstrap';



const SectionFour = () => {
    return ( 
        <>

            <div className="align-Center-">
            <Container className="s4Center">
                <div className="container-4">
                    <h2>
                        MOCUBA – 2018/2019
                    </h2>                    
                </div>

                      <Card>
                        <Card.Img variant="top" src="/images/Screenshot11.png" />
                        <Card.Body>
                        <Card.Title> <h5>NACALA – A - VELHA PORT </h5></Card.Title>
                            <Card.Text style={{ fontSize: ".8rem"}}>
                                P{("LANT POLES AND STRING 22KV ABC CONDUCTOR FROM THE 110/22KV MAIN SUBSTATION 22/6.6/3.3KV SUBSTATION").toLocaleLowerCase()}
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Container>
            </div>
        </>
     );
}
 
export default SectionFour ;