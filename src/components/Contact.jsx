import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm({data,the}) {
  const [state, handleSubmit] = useForm("mjvznoqr");
  if (state.succeeded) {
      return <p className="suc">Thanks for Registering!<a href="/">Home</a> </p>;
  }
  return (
      <form className="ter_section" onSubmit={handleSubmit}>
  
      <input
        id="Reciversname"
        type="name" 
        name="name"
        placeholder='Recievers name'
        className="piii"
      />

<input
 id="Number"
 type="number" 
 name="number"
 placeholder='Phone-number'
 className="piii"
       
      /> <br/>

<input
        id="Order"
        type="Order" 
        name="Order"
        placeholder='Order'
        className="piii"
        defaultValue={data}

      />
      <input
       id="Ordernumber"
       type="Ordernumber" 
       name="Ordernumber"
       placeholder='number of Order'
       className="piii"
      

       

      />
      <br/>


    
      <textarea className="messy"
        id="message"
        name="message"
        placeholder='Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /> <br/>
      <button className="cta_0" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App({data}) {
  return (
    <ContactForm data={data} />
  );
}
export default App;