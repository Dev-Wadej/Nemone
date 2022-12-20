// import Seo from "../shared/Seo";
import Navbar from "../components/Navbar"
//  import { Container } from "react-bootstrap";6 
import Footer from "../components/Footer";
// import Carousel from 'react-bootstrap/Carousel';
import ContactForm from "../components/Contact";

// import { Link } from "react-router-dom";






function Contact(){


  

    return(

        <>

<Navbar/> 

             
{/* ----------- svg for the header section ---------- */}


<h1 style={{margin:"1rem 10rem"}}>
    Order
</h1>
                  
                     
                        {/* -------------------- this is a comment ------------------ */}
                      
                    <ContactForm />
                        {/* -------------------- Sponsor section ------------------ */}


                  

                        {/* -------------------- What we do Section ------------------ */}

                    

                        {/* -------------------- How it Works Section ------------------ */}

                       
                
               
                        {/* -------------------- Newsletter Section ------------------ */}
            

               

                    <Footer/>
                
          
        </>
    );
}

export default Contact;