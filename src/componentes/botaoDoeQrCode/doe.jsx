import React from "react";
import Rodape from "../footer/footer";
import Inicio from "../home";
import { EstiloQrCode, CopyButton } from "./styleQrCode"; // Importa os styled-components
import { data } from './../../adicionarProdutos/dataTextos';

export default function DoacaoQrCode() {
  const textToCopy = "00020126360014BR.GOV.BCB.PIX0114102992360001245204000053039865802BR5901N6001C62110507SiteOng6304E7B7";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Texto copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  };

  return (
    <>
      <Inicio />

      <EstiloQrCode>
        <div className="containerBanner">
          <img src={data.bloco4.banner} alt="Banner" />
          <div className="sobreposicao"></div>
          <h2>Seja parte da mudança!</h2>
        </div>

        <div className="secaoDoacao">
          <p>Ajude-nos a transformar vidas. Sua contribuição faz toda a diferença.</p>
          <div className="containerQrCode">
            <img src={data.qrcode.imagemqrcode} alt="QR Code" />
            <CopyButton onClick={copyToClipboard}>
              Clique para copiar o código
            </CopyButton>
            <span>Escaneie o QR Code ou copie o código e doe qualquer valor!</span>
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
