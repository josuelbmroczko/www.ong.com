import { StyleParceiros } from "./styleParceiros";
import imagemPreeitura from '../../imagem/ITAQUERA_HORIZONTAL_FUNDO_CLARO_1666017438.png'

export default function NossosParceiros(){
return(
    <StyleParceiros>
    <h1>Nossos parceiros</h1>

    <ul>
        <li><img src={imagemPreeitura} alt="sub prefeitura de itaquara" /></li>

    
    </ul>

    </StyleParceiros>
)
}