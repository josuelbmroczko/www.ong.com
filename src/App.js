import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homeeapp from './pages/home/index.jsx';
import { ImageProvider } from '../src/imagemProvider/imagemProvider.jsx';
import './App.css';
import { Helmet } from 'react-helmet';
import Blog1 from './componentes/blog/blog1/blog1.jsx';
import Blog2 from './componentes/blog/blog2/blog2.jsx';
import Blog3 from './componentes/blog/blog3/blog3.jsx';
import Blog4 from './componentes/blog/blog4/blog4.jsx';
import DoacaoQrCode from './componentes/botaoDoeQrCode/doe.jsx';
import SobreConteudo from './pages/sobre/sobreConteudo.jsx';
import ContatoConteudo from './pages/contatos/contatoConteudo.jsx';
import Projetos from './componentes/projtos/projetos.jsx';
import logo from './imagem/logo1.png';  // Verifique se o caminho está correto
import Cursos from './componentes/cursos/cursos.jsx';

function Loading() {
  return ( 
    
    <div className="loading">
      <img src={logo} alt="Logo" /> {/* Adicione a propriedade alt para acessibilidade */}
      <h1>Projeto Geração Resgate</h1> {/* Adicionando o texto de boas-vindas */}
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ImageProvider>
      <Helmet>
        <meta name="description" content="ong" />
        <meta name="description" content="ong " />
        <meta name="description" content="ong " />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Homeeapp />} />
          <Route path="/contato" element={<ContatoConteudo />} />
          <Route path="/sobre" element={<SobreConteudo />} />
          <Route path="/doe" element={<DoacaoQrCode />} />
          <Route path="/nova1" element={<Blog1 />} />
          <Route path="/nova2" element={<Blog2 />} />
          <Route path="/nova3" element={<Blog3 />} />
          <Route path="/nova4" element={<Blog4 />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path='/cursos' element={<Cursos/>}/>
        </Routes>
      </Router>
    </ImageProvider>
  );
}

export default App;
