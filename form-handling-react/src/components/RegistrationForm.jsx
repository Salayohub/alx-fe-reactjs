
import { useState } from 'react';


const ControlledForm = () => {
    
    const [formData, setFormData ] = useState({
        
        last_name: '',
        first_name: '',
         email: '', 
         number: '', 
         date: '', 
         confirm: false,
         
     });

     const [errors, setErrors] = useState({})

        const {first_name, last_name, email, number, date, confirm } = formData

     const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({...prevState, [name]: type === "checked" ? 
            checked: value, }));
     };

     const validate= () => {
        const newErrors = {};
    if (!first_name.trim()) newErrors.first_name = "First name is required";
    if (!last_name.trim()) newErrors.last_name = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!number.trim()) newErrors.number = "Phone number is required";
    if (!date.trim()) newErrors.date = "Date of birth is required";
    if (!confirm) newErrors.confirm = "You must confirm your input";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // valid if no errors
  };


     const handleSubmit =(e) => {
        e.preventDefault();
        if (validate() ) {
        console.log("Form submitted: ", formData);
        alert("Form submitted succesfully ✅")
     }
     else {
        console.log("validation failed ❌")
        alert("validation failed ❌")
     }


    };


  return (

    <>
    <form onSubmit={handleSubmit}>
    <label>
        Text input: <input name='yourname' />
    </label>

    <hr />
    <label>
        Checkbox: <input type="checkbox" name='myCheckbox' />
    </label>
    <hr />
    <p>
        Radio button:
        <label>
            <input type="radio" name='myRadio' value="option1" />
            Option 1
        </label>

        <label>
            <input type="radio" name='myRadio' value="option1" />
            Option 2
        </label>

        <label>
            <input type="radio" name='myRadio' value="option1" />
            Option 3
        </label>
    </p>
<div>

    <h1>New form Redering</h1>
    

        <label>First Name: 
            <input  type="text"
                    name='first_name'
                    placeholder='Input your name'
                    value={first_name}
                    onChange={handleChange}
            />
       </label>
          
          <label>Last Name: 
            <input  type="text"
                    name='last_name'
                    placeholder='Input your name'
                    value={last_name}
                    onChange={handleChange}
            />
       </label>

       <label>Your Email: 
            <input  type="email"
                    name='email'
                    placeholder='Input your Email'
                    value={email}
                    onChange={handleChange}
            />
       </label>
       <label>Phone number: 
            <input  type="number"
                    name='number'
                    placeholder='Input your phone number'
                    value={number}
                    onChange={handleChange}
            />
       </label>

       <label>Date of birth: 
            <input  type="date"
                    name='date'
                    value={date}
                    onChange={handleChange}
            />
       </label>
       <br />

       <label >Confirm your input: 
            <input  type="checkbox"
                    name='confirm'
                    onChange={handleChange}
                   
            />
       </label>
       {errors.confirm && <p style={{color: "red" }}>{errors.confirm}</p>}
       <br />


<button type='submit'>Submit</button>

</div>
    </form>
    
      
      
    </>
  );
};


  export default ControlledForm;

