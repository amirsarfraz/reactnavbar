import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Box from "./components/Footer/FooterStyled";
import Slider from "./components/slider";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    
       
      <Navbar />
      <section className="hero-section">
      <Slider/>
      </section>
    </>
  );
};



const Download = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>setup link</p>
        
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>You can contact  </p>
        <Link to ='#'
        onClick={(e)=>{
          window.location="mailto:salmannaheed@gmail.com"
        }}
        > 
        <p>salmannaheed@gmail.com</p>
       
        <p>amirsarfraz50@gmail.com</p>
        </Link>
      </section>
    </>
  );
};
const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <p style={{ fontSize:'22px', flex:'start', marginLeft:'4%'}}>
      The purpose of this project “Smart Text Editor” is to provide flexibility to the users.<br></br>
      This is an desktop application which will be using by different operating systems like<br></br>
      Windows/Linux & Mac. More chances to the users and business organizations to use this<br></br>
       Smart Text Editor in a formal way.It have it’s built in features. The features have <br></br>
       been discussed in the proposal document.Moreover this application iseasy to use and <br></br>
       user-friendly. This application will be time saving for the users. They won’t <br></br>
       be needing to any third-party application to save their notepad files, to send<br></br><br></br>
      the files , to converting the files in the PDF form etc. We can see from its title only<br></br>
      that it will be an text editor. It will be providing both Online/Offline services. We’rehopeful for<br></br>
      this application to get success in the market once we introduce it and compete with other<br></br>
      Notepad Editors provided by the Operating systems. In online services users will be storing their<br></br>
      files on the internet/database. Users will be having the right to control their the privacy who can<br></br>
      view/edit their files. While for offline services, the user will be only using it locally on their<br></br>
      computer. It’s website will bealso created where the software will be uploaded so the users can<br></br>
      download it acrossthe world.</p>
</section> 
    </>
  );
};

const App = () => {
  return (
    <><Switch>
      <Route exact path="/">
        <Home />
      </Route>
    
      <Route path="/download">
        <Download />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
     
    </Switch>
    <Box />
     
    </>
    
    
  );
};

export default App;
