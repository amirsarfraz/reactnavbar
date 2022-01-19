import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer";

const Home = () => {
  return (
    <>    
      <Navbar />
      <section className="hero-section">
      <h1> INTRODUCTION</h1>
        <p style={{fontSize:'24px',marginLeft:'15%'}}>
          This is a desktop application called Smart Text Editor.<br></br>
          It is mainly use to write personal and public notepad documents.<br></br>
          It will connect the business organizations and users within an<br></br>
          application. Where they will be able to communicate in a formal way<br></br>
          with the advanced features in it. It will store all of the user’s data<br></br>
          in the database.Every developer wish is to develop in such a way so<br></br>
          the application remains efficient and effective to the users.These<br></br>
          are the basics things every developer must adhere. So, these will <br></br>
          be our goals & objectives in order to develop an application.</p>
      </section>
    </>
  );
};



const download = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>You can contect  </p>
        <p>Salman naheed</p>
        <p>03134155166</p>
        <p>salmannaheed@gmail.com</p>
        <p>Amir Sarfraz</p>
        <p>03404666752</p>
        <p>amirsarfraz50@gmail.com</p>
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

    

      <Route path="/service">
        <download />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about">
        <About />
      </Route>
     
    </Switch>
    <Footer /> 
    </>
    
    
  );
};

export default App;
