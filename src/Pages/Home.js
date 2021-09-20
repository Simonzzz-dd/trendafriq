import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { gsap } from "gsap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from "../Components/Home/SectionOne";
import Section2 from "../Components/Home/SectionTwo";
import Section3 from "../Components/Home/Section3";
import SectionFour from "../Components/Home/SectionFour";
import SectionFive from "../Components/Home/SectionFIve";
import SectionSix from "../Components/Home/sectionSix";


const Home = () => {
    
    useEffect(( ) => {
        gsap.registerPlugin( ScrollTrigger )
        gsap.defaults({ ease: "none", duration: 2.5})


        const tl = gsap.timeline()
        tl.from(".section2", { opacity: .6, transformOrigin:"center 1%", rotation:1 , yPercent: -5} )
            .from(".section3", { xPercent: -100,})
            .from(".section4", { yPercent: 100, })
            .from(".section4", {})
            .from(".section5", { opacity: 0})



        ScrollTrigger.create({
            animation: tl,
            trigger: "#container-",
            start: "top top",
            end: "+=8600",
            scrub: true,
            pin: true,
            anticipatePin: 1
        })
    })

    return ( 
        <div className="Home" id="Home-">
            <div className="section1 h-">
                {/* <canvas className="myCanvas"></canvas> */}
                <Section1/>
            </div>    
            <div className="container-" id="container-">
                <div className="section2 h-">
                    <Section2 />
                </div>
                <div className="section3 h-" >
                    <Section3></Section3>
                </div>
                <div className="section4 h-">
                    <SectionFour />
                </div>
                <div className="section5 h-">
                    <SectionFive />
                </div>
            </div>
            <div className="section6 h-">
                <SectionSix></SectionSix>
            </div>
            
        </div>
     );
}
 
export default Home;