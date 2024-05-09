import React from "react";
import Rodape from "../footer/footer";
import Inicio from "../home";
import { EstiloQrCode } from "./styleQrCode";
import { data } from './../../adicionarProdutos/dataTextos';

export default function DoacaoQrCode() {
  return (
    <>
      <Inicio />

      <EstiloQrCode>
        <div className="containerBanner">
          <img src={data.bloco4.banner} alt="" />
          <div className="sobreposicao"></div>
          <h2>Seja parte da mudança!</h2>
        </div>

        <div className="secaoDoacao">
          <p>Ajude-nos a transformar vidas. Sua contribuição faz toda a diferença.</p>
          <div className="containerQrCode">
            <img src={data.qrcode.imagemqrcode} alt="qrcode" />
            <span>Escanee o QR Code e doe qualquer valor!</span>
          </div>
        </div>

        <div className="comoAjudar">
          <h3>Como Você Pode Ajudar</h3>
          <ul>
            <li>
              <strong>Doações Financeiras:</strong> Contribua com qualquer quantia para apoiar nossos projetos e atividades.
            </li>
            <li>
              <strong>Parcerias:</strong> Empresas, instituições de ensino e outras ONGs podem se juntar a nós para ampliar o alcance de nossos programas.
            </li>
            <li>
              <strong>Divulgação:</strong> Compartilhe nossa causa nas redes sociais, eventos e campanhas de conscientização para aumentar a visibilidade e o apoio.
            </li>
            <li>
              <strong>Voluntariado:</strong> Dedique seu tempo e habilidades para trabalhar diretamente com as crianças e adolescentes ou em outras áreas de apoio.
            </li>
          </ul>
        </div>
        
      </EstiloQrCode>

      <Rodape />
    </>
  );
}
