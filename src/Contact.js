import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Contact.css";

function Contact() {
    const nav = useNavigate();
    const handleContact=()=>{
        nav("/Contact")
            }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
      ></div>
      <div className="rightSide">
        <div className="box1"><h1> Contact Us</h1></div>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;