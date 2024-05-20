// Altere os caminhos das imagens conforme necessário
 
import capa1 from '../imagem/pascoa.jpg'
import capa2 from '../componentes/blog/imagensblog2/CasaNinho3.jpeg'
import capa3 from '../componentes/blog/imagensBlog3/blog1.png'

 
const produtosData = [
  {
    id: 1,
    nome: 'Páscoa',
    imagem: capa1,
    link: "/nova1",
    texto:'Páscoa solidária:rua Bacurau, número 100'
  },
  {
    id: 2,
    nome: 'Casa Ninho',
    imagem: capa2,
    
    link: "/nova2",
    texto:'Projeto com o Hospital das Clinas, tratamento do Cancer, essa casa abriga todas as crianças e familia em SP.'
  },
  {
    id: 3,
    nome: 'Voluntário',
    imagem: capa3,
    
    link: "/nova3",
    texto:'Indivíduos colaboram, ideias florescem e ações transformadoras moldam um futuro mais promissor para todos.'
  },
 
];

export default produtosData;
