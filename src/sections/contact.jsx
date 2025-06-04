import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "../contactstyles.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qol1e7q", "template_gwwsh8c", form.current, "8bZAqFT7SlDelkLhQ")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message.");
        }
      );
  };


  return (
    <section id="contact" className="contact">
      <h2 className="display-3 text-center ibm-plex-serif-regular">
        Let's Create Something Extraordinary
      </h2>
      <h3 className="ibm-plex-serif-light">
        Ready to embark on your next hospitality venture? Let's discuss how we can bring your vision to life.
      </h3>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail} className="contact-form-element">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </section>
  );
}

export default Contact;
