import React from "react";
import { ValoresStyle } from "./valoresStyle";
import { data } from "../../adicionarProdutos/dataTextos";

export default function Valores() {
  return (
    <ValoresStyle>
      <h2>{data.bloco3.titulo}</h2>
      <ul>
        <li>
          <strong>{data.bloco3.texto1}</strong>
          <p>{data.bloco3.paragrafo1}</p>
        </li>
        <li>
          <strong>{data.bloco3.texto2}</strong>
          <p>{data.bloco3.paragrafo2}</p>
        </li>
        <li>
          <strong>{data.bloco3.texto3}</strong>
          <p>{data.bloco3.paragrafo3}</p>
        </li>
      </ul>
    </ValoresStyle>
  );
}
