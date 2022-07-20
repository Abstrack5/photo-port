import React from "react";

const ContactForm = () => {
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          {/* Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor */}
          <label htmlFor="name">Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Enter your message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
