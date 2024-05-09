import { useState } from 'react';
import { data } from "../../adicionarProdutos/dataTextos";
import { ServicosStyle } from "./servicosStyle";

export default function Servicos() {
    const [aberto1, setAberto1] = useState(false);
    const [aberto2, setAberto2] = useState(false);
    const [aberto3, setAberto3] = useState(false);

    const alternarAberto = (id) => {
        switch (id) {
            case 1:
                setAberto1(prevState => !prevState);
                break;
            case 2:
                setAberto2(prevState => !prevState);
                break;
            case 3:
                setAberto3(prevState => !prevState);
                break;
            default:
                break;
        }
    };

    const renderizarTexto = (texto, aberto) => {
        return aberto ? texto : texto.slice(0, 200) + (texto.length > 200 ? "..." : "");
    };

    const alturaItemLista = (id) => {
        switch (id) {
            case 1:
                return aberto1 ? "450px" : "200px"; // altura quando aberto ou fechado
            case 2:
                return aberto2 ? "520px" : "200px"; // altura quando aberto ou fechado
            case 3:
                return aberto3 ? "450px" : "200px"; // altura quando aberto ou fechado
            default:
                return "200px"; // altura padrão quando fechado
        }
    };

    return(
        <ServicosStyle>
            <h2>{data.servicos.nomeDaSessao}</h2>
            <ul>
                <li style={{ height: alturaItemLista(1) }}>
                    <h4>{data.servicos.titulo1}</h4>
                    <p>{renderizarTexto(data.servicos.texto1, aberto1)}</p>
                    <p>{data.servicos.subtexto1}</p>
                    {data.servicos.texto1.length > 200 &&
                        <button onClick={() => alternarAberto(1)}>{aberto1 ? 'Fechar' : 'Abrir'} conteúdo</button>
                    }
                </li>
                <li style={{ height: alturaItemLista(2) }}>
                    <h4>{data.servicos.titulo2}</h4>
                    <p>{renderizarTexto(data.servicos.texto2, aberto2)}</p>
                    <p>{data.servicos.subtexto2}</p>
                    <p>{data.servicos.subtexto3}</p>
                    {data.servicos.texto2.length > 200 &&
                        <button onClick={() => alternarAberto(2)}>{aberto2 ? 'Fechar' : 'Abrir'} conteúdo</button>
                    }
                </li>
                <li style={{ height: alturaItemLista(3) }}>
                    <h4>{data.servicos.titulo3}</h4>
                    <p>{renderizarTexto(data.servicos.texto3, aberto3)}</p>
                    <p>{data.servicos.subtexto4}</p>
                    <p>{data.servicos.subtexto5}</p>
                    <p>{data.servicos.subtexto6}</p>
                    <p>{data.servicos.subtexto7}</p>
                    <p>{data.servicos.subtexto8}</p>
                    <button onClick={() => alternarAberto(3)}>{aberto3 ? 'Fechar' : 'Abrir'} conteúdo</button>
                </li>
            </ul>
        </ServicosStyle>
    );
}
