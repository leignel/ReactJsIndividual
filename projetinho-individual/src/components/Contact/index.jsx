import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Entre em contato</h1>
      <span className="contactDesc">
        Preencha o formulário abaixo para entrar em contato
      </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Seu Nome" />
        <input type="text" className="email" placeholder="Seu Email" />
        <textarea
          className="msg"
          name="mensagem"
          rows="5"
          placeholder="Sua mensagem"
        ></textarea>
        <button type="submit" value="Send" className="submitBtn">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Contact;
