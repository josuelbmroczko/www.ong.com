import imagem from '../../imagem/Ofertas/oferta.png'
import imagem2 from './curso2.jpeg'
import { Style } from './style'

export default function Ofertas() {
    return (
        <Style>
           
            <div className="image-container">
                <img src={imagem} alt="Oferta" />
                <h3 className="overlay-text">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUw_Io9tQfv9PkiMPpOCtmQDmRna3rEnb-nvtSk7iadbn17g/viewform?pli=1" target='_blank' rel='noopener noreferrer'> Cadastre-se agora</a>
                </h3>

                <p>
                    A ong projeto geração resgate está oferecendo cursos de capacitação profissional 100% gratuitos com certificado e uma ajuda de custo no valor de R$700,00 ao final do curso.

                        Além de agregar ao currículo, o aluno que completar os 30 dias de curso também receberá essa quantia.

                Os cursos disponíveis são de:
                <p>🖥representante comercial</p>
                <p>💸promotor de vendas</p>
                <p> ✈️turismo</p>

                <p> Para matrículas e mais informações é só mandar “oi” no direct📩</p>

                <span>📞Telefone para contato:<a href="tel:+5511948638889">(11)948638889</a> </span> 
          
                    </p>
                           <img  src={imagem2} alt="imagem curso" />

            </div>
        </Style>
    )
}
