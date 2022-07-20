import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers'

// When that form data is maintained by the state of the component, we call it a controlled component. When the data is retrieved, then submitted directly from the DOM, we call it an uncontrolled component.
const ContactForm = () => {
  const [errorMessage, setErrorMessage] = useState(' ');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  const handleChange = (e) => {

    if(e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
        if(!isValid) {
          setErrorMessage('Your email is invalid!');
        }  else {
          setErrorMessage('');
        }
    } 
    else {
      if(!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage(' ');
      }
    }

    if (!errorMessage) { // The preceding conditional statement only allows the state to update with the user input if there is no error message, which is the correct logic.
      setFormState({...formState, [e.target.name]: e.target.value })
      // The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) 
      // and allows us to use [ ] to create dynamic property names.
    }
    // console.log('errorMessage', errorMessage);

  }
  // console.log(formState);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formState);
  };
  
  return (
    <section>
      <h1 data-testid='h1tag'>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          {/* Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> 
          element to htmlFor */}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
          {/* This function (onChange={handleChange}) will sync the internal state of the component formState with the 
          user input from the DOM. The onChange event listener will ensure that the handleChange 
          function fires whenever a keystroke is typed into the input field for name. */}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          {/* The onBlur attribute will fire the event once the user has changed focus from the input field, thus allowing the user to finish their entry before validating their input. */}
        </div>
        {errorMessage && (
          <div>
            <p className="error-text" >{errorMessage}</p>
          </div>
        )}
        <button data-testid='button' type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
