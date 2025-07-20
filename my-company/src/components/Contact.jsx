import { useState } from 'react';

   function Contact() {
     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ height: '100vh',padding:'10px 20px 40px 20px', backgroundColor: 'white', textAlign: 'center',color : 'black', }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
            
           <input
             type="text"
             name="name"
             
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0',padding: '7px', }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0',padding: '7px', }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0',padding: '27px', }}
           />
           <button type="submit" style={{display: 'flex', backgroundColor: 'blue'}}>Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;