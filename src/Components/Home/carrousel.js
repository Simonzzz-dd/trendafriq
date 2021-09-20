import { useState } from 'react';
import { Carousel, } from 'react-bootstrap';

const Carrousel_ = () => {

    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return ( 
        <>
        <Carousel activeIndex={index} onSelect={handleSelect} >
            <Carousel.Item>
                <img
                className="d-block w-100"
                style={{minHeight: "20.1rem", maxHeight:"20.1rem"}}
                src="/Backs/PR.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{minHeight: "20.1rem", maxHeight:"20.1rem"}}
                className="d-block w-100"
                src="/Backs/image-342.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>
        </>
     );
}
 
export default Carrousel_;