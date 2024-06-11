import React from "react";
import PageHead from "./ui/PageHead";

const ContactHead = () => {
  return (
    <div className="min-h-screen grid place-content-center">
      <PageHead title="સંપર્ક">
        <article className="prose md:prose-lg ">
          <h3>મુલાકાત લેવા બદલ આભાર!</h3>
          <h3>
            અમે રોમાંચિત છીએ કે તમે રોકાઈ ગયા. જો તમને કોઈ પ્રશ્નો હોય અથવા
            અમારી સાથે જોડાવા માંગતા હોય, તો તમે નીચેની ચેનલો દ્વારા સંપર્ક કરી
            શકો છો:
          </h3>

          <div>
            <ul className="card glass p-5 list-none">
              <li>
                📞
                <a href="tel:+ +9189******98"> +9189******98</a>
              </li>
              <li>
                ✉️
                <a href="mailto:snapnomad@gmail.com">snapnomad@gmail.com</a>
              </li>
              <li>
                📸
                <a
                  href="https://www.instagram.com/sneh.al/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @snapNomad
                </a>
              </li>
            </ul>
          </div>
    
      
        </article>
      </PageHead>
    </div>
  );
};

export default ContactHead;
 