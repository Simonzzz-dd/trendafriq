import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faChevronDown, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import Footer from "./Components/footer"
import S1NavBar from "./Components/Home/navbar/section1navbar";
import Progects from './Pages/Progects';
import ContactUS from './Pages/ContactUS';
import About from './Pages/about';
library.add(fab, faChevronDown, faCoffee, faLongArrowAltDown);



function App() {

  return (
    <div className="App">
      <Router>
      <S1NavBar></S1NavBar>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/Progects">
            <Progects/>
          </Route>
          <Route path="/contactUs">
            <ContactUS/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      <div className="section7 ">
          <Footer/>
      </div>
    </div>
  );
}

export default App;
