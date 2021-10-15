import { Form, Button, Col, InputGroup } from "react-bootstrap";
import { useState } from "react"


const Form_ = () => {

    const [validated, setValidated] = useState(false);

    const onSubmit_ = ( event ) => {
                event.preventDefault();
    const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.stopPropagation();
            }
            
            const name_ = document.getElementById("myName")
            const email = document.getElementById("formGridEmail")  
            const subject_ = document.getElementById("SubJEct")   
            const phoneNumber = document.getElementById("formGridPassword")    
   
            const text_ = document.getElementById("exampleForm.ControlTextarea1")    
            setValidated(true);

            const data = { username: name_.value, email: email.value, 
                subject_: subject_.value, phoneNumber: phoneNumber.value, text: text_.value  };

            fetch('/sendMail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });

    } 
    return ( 
            <Form noValidate validated={validated} onSubmit={onSubmit_}>
                <Form.Group className="mb-3" controlId="myName">
                    <Form.Label>Name:</Form.Label>
            <InputGroup hasValidation>
        
                <Form.Control
                    type="text"
                    placeholder="name_"
                    aria-describedby="inputGroupPrepend"
                    required
                    />
                </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" required placeholder="Enter email" />
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="SubJEct">
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control required placeholder="here is my Request" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control required type="number" placeholder="+25886..." />
                </Form.Group>
                <br/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control required as="textarea" rows={3} />
                </Form.Group>
                <br/>

                <Button  className="btn--" type="submit">
                    Submit
                </Button>
            </Form>
     );
}
 
export default Form_;