import "../styles/contactUS/contact.scss"
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Form_ from "../Components/contactUS/form";
import { useEffect, useState } from "react";



const ContactUS = () => {

let [isLoading, setLoading ] = useState({
            content: {
                display: "none"
            },
            spinner: {
                display: "flex"
            }
        })

    useEffect(()=>{
        
    },[isLoading])
    
    function loading_( ) {
        setTimeout(( ) => {
            setLoading({
                content: {
                    display: "block"
                },
                spinner: {
                    display: "none"
                }
            })            
        },1)
    }



    return ( 
    <>
    <div className="contactUs">

                    <div className="contactTheme" style={isLoading.content}>
                            
                    </div>
                    <Container className="contactContainer" style={isLoading.content}>

                        <Row className="R--" md={2} xs={1}>
                            <Col className="cl" xs={12} md={8}>
                                <div className="contactDiv">
                                    <div className="MailUS">
                                        <h5>Contact us</h5>
                                        <br/>
                                        <p><b>Send a Message</b></p>
                                        <Form_/>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} className="cl" md={4}>
                                <div className="contactDiv">
                                    <div className="data--">
                                        <b>OFFICE ADDRESS</b> <br/><br/>
                                        <b>Location:</b>
                                        <p>Av. Mario Esteves Coluna, 611,
                                            Matola - Maputo. 
                                        </p>
                                        <b>Fax:</b>
                                        <p>+258 21750315
                                        </p> 
                                        <b>Imail:</b>
                                        <p> info@trend-afriq.co.mz
                                        </p> 
                                    </div>

                                    <div className="maps">
                                                <iframe onLoad={()=>loading_()}
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.7296075935113!2d32.45165382922881!3d-25.95879979317227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU3JzMxLjciUyAzMsKwMjcnMDcuOSJF!5e1!3m2!1sen!2smz!4v1538050154892" 
                                                style={{width: "100%", height: "18rem"}}   > </iframe>                                       
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
        
                <div style={isLoading.spinner} className="spiner_">
                    <Spinner animation="border" size="md" />
                </div>

        </div>   
    </> );
}
 
export default ContactUS;