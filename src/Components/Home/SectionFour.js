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
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" />
                        <Card.Body>
                        <Card.Title> <h5>TWO 33KV DOUBLE CIRCUIT LINE FROM PV PLANT TO MOCUBA SUBSTATION </h5></Card.Title>
                            <Card.Text style={{ fontSize: ".8rem"}}>
                                F{("OUNDATIONS, ERRECTION, DRESSING AND STRINGING OF 33KV LINE FROM THE PHOTOVOLTAIC FARM TO MOCUBA SUBSTATION").toLocaleLowerCase()}
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Container>
            </div>
        </>
     );
}
 
export default SectionFour ;