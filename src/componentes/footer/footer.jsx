import React from 'react';
import { FooterContainer, Direitos } from './style';
import Whatsapp from './../whatsapp/whatsapp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <FooterContainer>
        <ul>
          <h3>Contatos 📞</h3>
          <li>
            <a href="tel:+5527414211" rel="noopener noreferrer">
              <p>Telefone: (11) 2741-4211</p>
            </a>
          </li>
          <li>
            <a href="tel:+5511980479044" rel="noopener noreferrer">
              <p>Celular: (11) 98047-9044</p>
            </a>
          </li>
          <li>
            <a href="tel:+5511931450860" rel="noopener noreferrer">
              <p>Celular: (11) 93145-0860</p>
            </a>
          </li>
          <li>
           
          </li>
          <li>
            <p>Sede: Av. Das Alamandas nº 190 </p>
            <p>Cep: 08225-310</p>
          </li>
        </ul>

        <ul>
          <li>
            <h3>Redes Sociais 🌐</h3>
          </li>
          <li>
            <a href="https://www.instagram.com/geracaoresgate.ong/" target="_blank" rel="noopener noreferrer">
              <p>Instagram</p>
            </a>
          </li>
          <li>
            <a href="https://wa.me/5511931450860?text=proje+togera%C3%A7ao+resgate" target="_blank" rel="noopener noreferrer">
              <p>Whatsapp</p>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <p>Youtube </p>
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <p>Tik Tok</p>
            </a>
          </li>
          <li>
          <a href="mailto:geracaoresgate.ong@gmail.com">
              <p>Email:geracaoresgate.ong@gmail.com</p>
            </a>
          </li>
        </ul>
        <Direitos>
          <p className="direitos">
            Este site é protegido pelo reCAPTCHA e a Política de Privacidade e os Termos de Serviço do Google se aplicam.
          </p>
        </Direitos>
      </FooterContainer>
    </div>
  );
};

export default Footer;
