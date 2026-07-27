import React, { useState } from "react";
import "./contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

function Contact() {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setSendMessage(true);

    try {
      const response = await fetch("http://localhost:3000/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          phone: phone,
          message: message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail("");
        setFullname("");
        setPhone("");
        setMessage("");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setSendMessage(false);
    }
  };
  return (
    <>
      <Header />
      <section id="contact">
        <div className="contact">
          <div className="contact-head">
            <h1>CONTACT US</h1>
            <p id="idea">Have an idea? Let's connect</p>
            <p>Let's turn your vision into a powerfull, reliable software</p>
          </div>
          <div className="contact-box">
            <form onSubmit={handleSendMessage}>
              <span className="form-span">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </span>
              <span className="form-span">
                <label htmlFor="name">Full name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </span>
              <span className="form-span">
                <label htmlFor="number">Phone number</label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </span>
              <span className="form-span">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your message"
                  required
                ></textarea>
              </span>
              <button>{sendMessage ? "Sending..." : "Send message"}</button>
            </form>
            <div className="handles">
              <div className="handles-box">
                <a href="mailto:fidelmuthomi007@gmail.com" target="_blank">
                  <i className="fa-regular fa-envelope"></i>{" "}
                  contact@finoratechnologies.com
                </a>
                <a href="https://wa.link/m3ih9m" target="_blank">
                  <i className="fa-brands fa-whatsapp"></i> 0789455874
                </a>
                <a href="tel:+254115931207" target="_blank">
                  <i className="fa-solid fa-phone"></i> 0115931207
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
