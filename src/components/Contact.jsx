import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './Style/Contact.css';

const Contact = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
    if (isFormVisible) {
      const script = document.createElement('script');
      script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Cleanup script on hiding the form
      const existingScript = document.querySelector(
        'script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    }
  }, [isFormVisible]);

  return (
    <div className='contact-main'>
      <Nav/>
      {isFormVisible && (
        <div class="visme_d" data-title="Stylish Contact Form" data-url="dm0w0z91-stylish-contact-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="48714"></div>
      )}
    </div>
  );
}

export default Contact;
