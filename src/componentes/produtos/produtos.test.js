 
import produtosData from '../../adicionarProdutos/produtos';

 
import { render, screen } from "@testing-library/react";
 import Produtos from "./produtos";

// Teste para renderizar lista de produtos
test('renderiza lista de produtos', () => {
  // Renderize o componente `Produtos` e passe os dados dos produtos como uma propriedade
  render(<Produtos produtosData={produtosData} />);
 
  const produtos = screen.getAllByRole('listitem');
  expect(produtos.length).toBe(produtosData.length);

  
});
