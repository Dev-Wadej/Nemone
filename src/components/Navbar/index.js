import React from "react";

// import Seo from "../shared/Seo";
// import Navbar from "../components/Navbar"
import {Nav,Container,Navbar} from "react-bootstrap";






function Navvbar(){


  

   



  

  return(

      <React.Fragment>
<Navbar collapseOnSelect expand="lg" className="top_nav">
<Container>
<Navbar.Brand href="/"><img src="./asset/img/Logo.svg" alt="logo" /></Navbar.Brand>
{/* <Navbar.Toggle  /> */}
{/* <Navbar.Collapse id="responsive-navbar-nav"> */}
  <Nav className="me-auto ">
    <Nav.Link href="#features"> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none"><path stroke="#606060" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.125" d="M10.938 8.125h.562c.615 0 1.125-.503 1.125-1.125 0-.615-.51-1.125-1.125-1.125S10.375 6.378 10.375 7v.563c0 .307.255.562.563.562ZM8.5 15.25a2.535 2.535 0 1 0 0-5.07 2.535 2.535 0 0 0 0 5.07Z"/><path stroke="#606060" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.125" d="M13.855 13.75A7.473 7.473 0 0 0 16 8.5C16 4.36 12.64 1 8.5 1a7.503 7.503 0 0 0-5.37 12.742"/></svg> Opening Monday-friday</Nav.Link>
    <Nav.Link href="#features"> <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none"><path stroke="#606060" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" d="M11.283 10.885 8.957 9.498c-.405-.24-.735-.818-.735-1.29V5.133"/><path stroke="#606060" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.125" d="M16 8.5c0 4.14-3.36 7.5-7.5 7.5C4.36 16 1 12.64 1 8.5 1 4.36 4.36 1 8.5 1 12.64 1 16 4.36 16 8.5Z"/></svg>9:00pm -4:pm</Nav.Link>
    
    {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
  </Nav>
 
{/* </Navbar.Collapse> */}
</Container>
</Navbar>
        
      </React.Fragment>
  );
}


export default Navvbar;