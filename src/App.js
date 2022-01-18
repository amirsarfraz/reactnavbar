import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import { VStack } from "@chakra-ui/react";



const Home = () => {
  return (
    <>
    
      <Navbar />
      
      <section className="hero-section">
      <h1> INTRODUCTION</h1>
        <p style={{textAlign:'center',fontSize:'24px'}}>
          This is a desktop application called Smart Text Editor.
          It is mainly use to write personal and public notepad documents. It
          will connect the business organizations and users within an
          application. Where they will be able to communicate in a formal way
          with the advanced features in it. It will store all of the user’s data
          in the database.
        </p>
        <p style={{textAlign:'center',fontSize:'24px'}}>
        
        Every developer wish is to develop in such a way so the application 
        remains efficient and effective to the users.These are the basics things
        every developer must adhere. So, these will be our goals & objectives
        in order to develop an application.</p>
        
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      
      <section className="hero-section">
  <div style={{marginRight:'50%', marginTop:'5%'}}>     
	<h1 style={{textAlign:'center',fontSize:'30px'}}>LOGIN SYSTEM</h1>
<p style={{textAlign:'center',fontSize:'24px'}}>
The login system will be provided in this application.<br></br> 
So, the users canstay connected with others, communicate<br></br>
 easily within the text/PDF applications and access the files.</p>

	<h1 style={{textAlign:'center',fontSize:'30px'}}>USER PROFILES</h1>
  <p style={{textAlign:'center',fontSize:'24px'}}>
  There will be user profiles where the user’s <br></br>
  public text/PDF files will be available.<br></br>
 User can post the files in his/her profile.</p>


<h1 style={{textAlign:'center',fontSize:'30px'}}>DATA ACCESS</h1>
<p style={{textAlign:'center',fontSize:'24px'}}>
Users can access the data of other users which will<br></br>
be posted on their profiles. User can give permissions<br></br>
who can access the data and who can not.</p>
</div>
<VStack>

<div style={{marginLeft:'40%'}}>
<h1 style={{textAlign:'center',fontSize:'30px'}}>PDF CONVERTER</h1>
<p style={{textAlign:'center',fontSize:'24px'}}>
The users will be able to convert the txt<br></br>
 files into PDF document within an<br></br>
 application with just one button click.</p>


<h1 style={{textAlign:'center',fontSize:'30px'}}>SYNC FUNCTIONLITY</h1>
<p style={{textAlign:'center',fontSize:'24px'}}>
The Sync functionality is like when the Login ID is logged<br></br>
into two or more devices.The other device two will be able to<br></br>
sync the text written in the device one once the file is saved<br></br>
by CTRL+S or by the button. This will be only happening if the same<br></br> 
 Login ID is in two different devices.
 </p>
 </div>
 </VStack>
</section> 
 <Footer />  
    </>
  );
};

const Service = () => {
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

const App = () => {
  return (
    <><Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
     
    </Switch>
   
    </>
    
    
  );
};

export default App;
