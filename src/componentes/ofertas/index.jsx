import imagem from '../../imagem/Ofertas/oferta.png'
import { Style } from './style'

export default function Ofertas() {
    return (
        <Style>
            <h2>Curso</h2>
            <div className="image-container">
                <img src={imagem} alt="Oferta" />
                <h3 className="overlay-text">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUw_Io9tQfv9PkiMPpOCtmQDmRna3rEnb-nvtSk7iadbn17g/viewform?pli=1" target='_blank' rel='noopener noreferrer'> Cadastre-se agora</a>
                </h3>
            </div>
        
        </Style>
    )
}
