import React from 'react';
import { StyleProdutos } from './style';
import { Link } from 'react-router-dom';

// Função para formatar o preço (exemplo simples)
function formatarPreco(preco) {
  if (preco !== undefined) {
    // Adicione aqui a formatação desejada, por exemplo, adicionar símbolo de moeda, casas decimais, etc.
    return `R$ ${preco.toFixed(2)}`;
  } else {
    return 'Preço não disponível';
  }
}

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
                <p>{produto.nome}</p>
              {/* <span>{`Mensalidade apartir de: ${formatarPreco(produto.preco)}`}</span>   */} 
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </StyleProdutos>
  );
}
