import React from "react";

function Contact() {
  return (
    <section className="contact" id="Contact">
      <div className="contactCont">
        <h1 className="contactHead"> What's next? </h1>
        <hr className="breaks" />
        <p className="contact-desc">
          {" "}
          I am looking for opportunities where I can make a real impact and hone
          my knack for problem solving. Please don't hesitate to reach out to
          me!{" "}
        </p>
        <h1 className="fin"> Get in touch! </h1>

        <a
          className="email-link"
          href="mailto:Agampodi.I.Abeysekara.22@dartmouth.edu"
        >
          {" "}
          <p className="p"> Send email </p>{" "}
        </a>
      </div>
    </section>
  );
}

export default Contact;
