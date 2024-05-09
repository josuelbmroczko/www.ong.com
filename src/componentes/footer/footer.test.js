import { render, screen } from "@testing-library/react";
import Footer from "./footer";

test('verifica se o texto "Contatos" está presente', () => {
    render(<Footer />);

    // Verifica se os textos estao presentes na tela
    const contatosElement = screen.getByText('Contatos');
    expect(contatosElement).toBeTruthy();

     

    const redesSociaisElement = screen.getByText('Redes Sociais');
    expect(redesSociaisElement).toBeTruthy();

    const políticaDeCancelamentoElement = screen.getByText('Política de cancelamento');
    expect(políticaDeCancelamentoElement).toBeTruthy();

    const logoElement = screen.getByAltText('Logo');
    expect(logoElement).toBeTruthy();


});
