// import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
import { useEffect,useState } from "react";
//  import { Container } from "react-bootstrap";6 
import Footer from "../components/Footer";
// import Carousel from 'react-bootstrap/Carousel';
import ContactForm from "../components/Contact";
import { useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";






function Contact(){

const location = useLocation();
    return(

        <>

<Navbar/> 

             
{/* ----------- svg for the header section ---------- */}


<h1 style={{margin:"1rem 10rem"}}>
    Order
</h1>
                  
                     
                        {/* -------------------- this is a comment ------------------ */}
                      
                    <ContactForm data={location.state?.data} />
                        {/* -------------------- Sponsor section ------------------ */}


                  

                        {/* -------------------- What we do Section ------------------ */}

                    

                        {/* -------------------- How it Works Section ------------------ */}

                       
                
               
                        {/* -------------------- Newsletter Section ------------------ */}
            

               

                    <Footer/>
                
          
        </>
    );
}

export default Contact;