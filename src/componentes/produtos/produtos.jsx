import React from 'react';
import { StyleProdutos } from './style';
import { Link } from 'react-router-dom';

 
 

export default function Produtos({produtosData}){
  return (
    <StyleProdutos>
      <ul>
        {produtosData.map((produto, index) => (
          <li key={index}>
            <Link to={produto.link}  >
              <div className="produto-info">
                <img
                  src={produto.imagem}
                  alt={`Imagem ${index}`}
                  className="imagem-produto"
                />
                <h3>{produto.nome}</h3>
              <span> {produto.texto}</span>  
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </StyleProdutos>
  );
}
