import React from "react";

function Contact() {
  return (
    <div id="contact" className="container contain py-10">
      <div className="contact sections">
        <div className="contact_header top_header">
          <h2 className="before_after">Get in touch</h2>
        </div>
        <div className="contact_links w-full">
          <ul className="flex justify-center flex-wrap md:text-xl gap-5 md:gap-10 lg:gap-20">
            <li>
              <a
                className="contact_icons"
                target="_blank"
                href="https://www.facebook.com/alriadhridoy/"
              >
                <i className="fab fa-facebook md:pb-1 text-2xl md:text-inherit"></i>
                <div className="link_name">
                  <span className="hidden md:inline-block">Facebook</span>
                </div>
              </a>
            </li>
            <li>
              <a
                className="contact_icons"
                target="_blank"
                href="https://twitter.com/AlRiadHridoy"
              >
                <i className="fab fa-twitter md:pb-1 text-2xl md:text-inherit"></i>
                <div className="link_name">
                  <span className="hidden md:inline-block">Twitter</span>
                </div>
              </a>
            </li>
            <li>
              <a
                className="contact_icons"
                target="_blank"
                href="https://www.instagram.com/alriadhridoy/"
              >
                <i className="fab fa-instagram md:pb-1 text-2xl md:text-inherit"></i>
                <div className="link_name">
                  <span className="hidden md:inline-block">Instagram</span>
                </div>
              </a>
            </li>
            <li>
              <a
                className="contact_icons"
                target="_blank"
                href="https://www.linkedin.com/in/al-riad-hridoy-5049201a4/"
              >
                <i className="fab fa-linkedin-in md:pb-1 text-2xl md:text-inherit"></i>
                <div className="link_name">
                  <span className="hidden md:inline-block">LinkedIn</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
