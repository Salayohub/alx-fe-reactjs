// formikForm.js 
import React from "react"; 
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from "yup"; 
// ✅ Validation schema with Yup 
const validationSchema = Yup.object().shape({ 
    username: Yup.string() 
    .min(4, "Username must be at least 4 characters") 
    .required("Username is required"), 
    email: Yup.string() 
    .email("Invalid email address") 
    .required("Email is required"), // ✅ replaces if (!email) 
    password: Yup.string() 
    .min(4, "Password must be at least 4 characters") 
    .required("Password is required"), // ✅ replaces if (!password) 
    }); 
    
    const FormikForm = () =>( 
    <div> 
        <h1>Registration Form Formik</h1> 
<Formik 
        initialValues={{ username: "", email: "", password: ""
         }} 
         validationSchema={validationSchema} 
         onSubmit={(values, { resetForm }) => { 
        console.log("Form submitted ✅:", values); 
        alert("Form submitted successfully ✅"); 
        resetForm(); // clears fields after submit
        }} > 
        {({ errors, touched}) => ( 
<Form> 
            {/* Username */} 
            <div> 
                <label htmlFor="username">Username:</label> 
<Field 
                type="text" 
                name="username" 
                placeholder="Enter username" 
                /> 
<ErrorMessage 
                name="username" 
                component="p"
                 /> 
                 </div> 
                 {/* Email */} 
                 <div> 
                    <label htmlFor="email">Email:</label> 
<Field 
                    type="email" 
                    name="email" 
                    placeholder="Enter email" 
                    /> 
<ErrorMessage 
                    name="email" 
                    component="p" 
                    /> 
                    </div> 
                    
                {/* Password */} 
                <div> 
                    <label htmlFor="password">Password:</label> 
                     
 <Field 
                     type="password" 
                     name="password" 
                     placeholder="Enter password" 
            />
<ErrorMessage 
                     name="password" 
                     component="p" 
                     /> 
                     </div> 
                     <button 
                     type="submit">Submit</button> 
 </Form>
                      )} 
                      </Formik> 
                      </div> 
                      ); 
                      
                      
export default FormikForm