import { Container, Content } from "./styles";
import logoImg from "../../assets/logo.png";

export function Navbar() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="" />

        <div>
          <a href="">Sobre</a>
          <a href="">Faculdades</a>
          <a href="">Contatos</a>
        </div>
      </Content>
    </Container>
  );
}
