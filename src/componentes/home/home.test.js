import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ImageProvider } from '../../imagemProvider/imagemProvider';
import Home from './index';

test('Deve renderizar a página Home sem erros', () => {
  render(
    <MemoryRouter>
      <ImageProvider>
        <Home />
      </ImageProvider>
    </MemoryRouter>
  );

  // Verifica se o elemento da logo está presente
  const logoElement = screen.getByRole('img', { name: 'Imagem da Logo' });
  expect(logoElement).toBeTruthy();

  // Verifica se o atributo src do elemento da logo está correto
  expect(logoElement.getAttribute('src')).toEqual('logoPrincipal.png');

  // Verifica se o elemento do carrinho está presente
  const cartElement = screen.getByAltText('Ícone de Carrinho');
  expect(cartElement).toBeTruthy();

  // Verifica se o elemento da lupa de pesquisa está presente
  const searchElement = screen.getByAltText('Ícone de Lupa');
  expect(searchElement).toBeTruthy();

  // Verifica se o input de pesquisa está presente
  const searchInput = screen.getByPlaceholderText('Digite aqui');
  expect(searchInput).toBeTruthy();

  // Verifica se os links de navegação estão presentes
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeTruthy();

  const contatoLink = screen.getByText(/Contato/i);
  expect(contatoLink).toBeTruthy();

  const sobreLink = screen.getByText(/Sobre/i);
  expect(sobreLink).toBeTruthy();

  const entrarLink = screen.getByText(/Entrar/i);
  expect(entrarLink).toBeTruthy();
});
