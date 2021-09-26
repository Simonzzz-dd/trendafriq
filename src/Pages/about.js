import "../styles/about/about.scss"
import { Container } from 'react-bootstrap';
import Carrousel_ab from "../Components/about/carrousel_";
const About = () => {
    return ( 
        <>
            <div className="about1">

                <Container>
                    <Carrousel_ab/>
                    <h5 > Breaf summary of our activity</h5>
                    <div>
                    <p>
                        Trend Afriq, Lda Mozambique based company initially constituted in the electrical and instrumentation field since 2009.
                        During the period in reference, Trend Afriq was engaged specifically in Tete Province in the construction of distribution,
                        transmission power lines and substations. The Company was registered as a legal entity June in 2010.
                        Trend Afriq Lda, is distinguished by Multi Discipline Capabilities and Technical Expertise and combined with our Hands-on
                        approach we ensure that our clients receive the most Cost Effective, fit for purpose and Professional Service in the
                        Construction Industry.
                        With our strategic partnerships with Suppliers and Engineering Houses spread not limited to Mozambique and the African
                        Continent, we can offer our clients the best services and pricing on Material and Equipment designed for purpose. 
                    </p>
                    </div>
                    <h5 > General</h5>
                    <div>
                        <p>
                            Trend Afriq, Lda has the necessary Human Resources, Equipment and Machinery to execute any Type and Size of Project:
                            The Technical Staff has extensive experience in all Construction Related disciplines, moreover, this Technical Staff consisting
                            of Technicians, Artisans and Engineers has international recognized qualification to complement their onsite work experience.
                            This gives us the advantage to meet current and future challenges of our customers / clients and assist us with the
                            implementation of high standards in work quality and responding to the newest market demands and trends.
                            The recipe for our success is embodied in the following:
                            <li>Technical excellence in engineered solutions,</li> 
                            <li> Strict management control of budgetary constraints, </li>
                            <li>Strict management control of project planning,</li>
                            <li>Strict management control of work quality, Supply, Construction, Installation & Commissioning</li>
                            In recent years, Automation Concepts general scope of work has covered various issues such as Installation of electrical,
                            instrumentation and automation equipment, Testing of supplied and free issued equipment as well as system commissioning.
                            In this regard, TREND AFRIQ continuously prepare and trains its technical team to meat efficiency on our focused
                            construction field which is not limited to:
                            Gas and solar power plants, Substations, HV, MV and LV Power Reticulation, (overhead lines and switch yards) and industrial
                            plants.

                        </p>
                    </div>
                    <div className="aboutImage">
                        <img src="/Backs/PR.jpg" alt="" />
                    </div>
                    <h5 >Along the 11 years of its existence, TREND AFRIQ has achieved excellence on the following:</h5>
                    <div>
                        <p>
                            <li>Transmission Lines foundations</li>
                            <li>Transmission line Towers erection </li>
                            <li>Design, Construction and Maintenance of overhead lines in High voltage (HV); medium voltage (MV), low voltage (LV)
                            and Transformers stations (PTs).</li>
                            <li>Supply and installation of underground networks for HV, MV and LV</li>
                            <li>
                                Design, Supply and Erection of Distribution and Substations including but not limited to Equipment Supply /Design,
Civil Buildings, Steel Structures, Mechanical Erections etc. 
                            </li>
                            <li>
                                Domestic Electrical Systems – Houses, Flats etc. 
                            </li>
                            <li>Industrial Electrical Systems - Factories, Shopping Centres etc. </li>
                            <li>
                                Supply and Installation and Maintenance of air cooling / heating systems; Air-conditioning, HVAC (From Small Air
                                Conditioners to Big Systems for Large Shops & Warehouse. Package Air conditioner. Room Air conditioner. Variable
                                Refrigerant Flow. Heat Pump - Water Heater)
                            </li>
                            <li>
                                Supply and installation of Electrical Material and Equipment; Transformers, Miniature Substations, Generators etc. 
                            </li>
                            <li>
                                We have experience on Automation, instrumentations, Pneumatics, Hydraulics in Mining, Process Plants, Smelters,
                                Coal Terminals
                            </li>
                            <li>
                                We provide complete solution for Solar Power systems such as Solar Farms (PV/CSP), commercial and Residential
                            </li>
                        </p>
                    </div>
                </Container>
            </div>
        </>
     );
}
 
export default About;