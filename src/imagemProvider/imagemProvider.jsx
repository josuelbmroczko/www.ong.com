import React, { createContext, useContext } from 'react';
 
import lupa from '../imagem/lupa.png';
import carrinho from '../imagem/cart.svg';
 

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const images = {
    
    imagemCart: carrinho,
    imagemLupaPesquisa: lupa,
 
    
    // Adicione mais imagens conforme necessário
  };

  return (
    <ImageContext.Provider value={images}>{children}</ImageContext.Provider>
  );
}

export function useImages() {
  return useContext(ImageContext);
}
