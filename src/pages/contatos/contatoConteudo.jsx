import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'
import Footer from '../../componentes/footer/footer';
import { useImages } from '../../imagemProvider/imagemProvider'
import { data } from '../../adicionarProdutos/dataTextos';
import { StyledDiv } from './contatos';
import Home from '../../componentes/home';

export default function ContatoConteudo() {
  const [textareaRows, setTextareaRows] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sentError, setSentError] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_jpx4vkb", "template_zf53jmu", templateParams, "NICMzQUN83oDIe6bC")
      .then((response) => {
        console.log("Email enviado:", response.status, response.text);
        setSentSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Erro ao enviar email:", error);
        setSentError(true);
      });
  }

  const { imagemLogo } = useImages();
useEffect(()=>{
  window.scrollTo(0,0);
},[])
  return (
    <>
    <Home/>
    
    <StyledDiv>
   
      <div className="form-container">
        <form className="form" onSubmit={sendEmail}>
          <h3>Enviar email</h3>
          <input
            className="input"
            type="text"
            placeholder="Seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="input"
            type="text"
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            className="textarea"
            placeholder="Sua mensagem..."
            onChange={(e) => {
              setMessage(e.target.value);
              const rows = Math.ceil(e.target.scrollHeight / 20); // Adjust as necessary
              setTextareaRows(rows);
            }}
            value={message}
            rows={textareaRows}
          />
          {sentSuccess && <p>Email enviado com sucesso!</p>}
          {sentError && <p>Erro ao enviar email. Por favor, tente novamente mais tarde.</p>}
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
      
     
    </StyledDiv> 
     <Footer />
    </>
  );
}
