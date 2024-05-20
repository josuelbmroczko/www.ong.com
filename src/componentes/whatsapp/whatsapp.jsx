import { StyleWhatsap } from "./styleWhatsap";
import whatsapp from '../../imagem/whatsapp.png'
import { data } from "../../adicionarProdutos/dataTextos";

export default function Whatsapp (){
    return(
        <StyleWhatsap>

        <a href={data.footer.contatos.whatsappLink} target="black" rel="noopener noreferrer" > <img src={whatsapp} alt="" /></a>
         
        </StyleWhatsap>
    )
}