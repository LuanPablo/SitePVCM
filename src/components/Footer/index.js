import { Container } from "./styles";
import logoImg from "../../assets/logo.png";

export function Footer() {
  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <div>
        <div>
          <div>
            <strong>Endereço:</strong>
            <span> Rua Elpídio, n° 530 - Centro, Mesquita.</span>
          </div>
          <div>
            <strong>Telefone:</strong>
            <span> (xx) xxxxx-xxxx</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span> emailaqui@gmail.com</span>
          </div>
        </div>
        <div>
          <div>
            <strong>Links Úteis</strong>
          </div>
          <div>
            <span>Inscrições</span>
          </div>
          <div>
            <span>Área do Aluno</span>
          </div>
          <div>
            <span>Calendário</span>
          </div>
        </div>
        <div>
          <div>
            <strong>PVCM</strong>
          </div>
          <div>
            <span>Sobre a Iniciativa</span>
          </div>
          <div>
            <span>Universidades</span>
          </div>
          <div>
            <span>Trabalhe Conosco</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
