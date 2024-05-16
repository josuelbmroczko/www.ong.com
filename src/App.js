import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homeeapp from './pages/home/index.jsx';
  import { ImageProvider } from '../src/imagemProvider/imagemProvider.jsx';
 
import './App.css'
 import { Helmet } from 'react-helmet';
import Blog1 from './componentes/blog/blog1/blog1.jsx';
import Blog2 from './componentes/blog/blog2/blog2.jsx';
import Blog3 from './componentes/blog/blog3/blog3.jsx';
import Blog4 from './componentes/blog/blog4/blog4.jsx';
import DoacaoQrCode from './componentes/botaoDoeQrCode/doe.jsx';
import SobreConteudo from './pages/sobre/sobreConteudo.jsx';
import ContatoConteudo from './pages/contatos/contatoConteudo.jsx';
import Projetos from './componentes/projtos/projetos.jsx';

 
    


function App() {
  return (
    <ImageProvider>
            <Helmet>
          <meta name="description" content='ong' />
          <meta name="description" content='ong ' />
          <meta name="description" content='ong ' />

          </Helmet>
      <Router>
        <Routes>
          {/* 
  Esta é a rota para a página inicial.
  Quando a URL corresponder a "/", o componente Homeeapp será renderizado.
*/}
          <Route path="/" element={<Homeeapp />} />
           <Route path="/contato" element={<ContatoConteudo />} />
          <Route path="/sobre" element={<SobreConteudo />} />
          <Route path="/doe" element={<DoacaoQrCode/>}/>

          <Route path="/nova1" element={<Blog1 />} />
          <Route path="/nova2" element={<Blog2 />} />
          <Route path="/nova3" element={<Blog3 />} />
          <Route path="/nova4" element={<Blog4 />} />
          <Route path='/projetos' element={<Projetos/>}/>
           
         </Routes> 
      </Router>

    </ImageProvider>
  );
}

export default App;
