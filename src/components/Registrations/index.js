import { Container } from "./styles";
import aberturaVagas from "../../assets/img1.svg";
import prematricula from "../../assets/img2.svg";
import matricula from "../../assets/img3.svg";

export function Registrations() {
  return <Container>
    <h2>COMO SÃO FEITAS AS INSCRIÇÕES?</h2>
    <div>
      <div>
        <img src={aberturaVagas} alt="abertura de vagas" />
        <h3>Abertura de Vagas</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant odio diam, ac natoque sed platea. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant odio diam, ac natoque sed platea.
        </p>
      </div>
      <div>
        <img src={prematricula} alt="" />
        <h3>Pré-inscrição</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant odio diam, ac natoque sed platea. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant odio diam, ac natoque sed platea.
        </p>
      </div>
      <div>
        <img src={matricula} alt="" />
        <h3>Matrícula</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant odio diam, ac natoque sed platea. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant odio diam, ac natoque sed platea.
        </p>
      </div>
    </div>
  </Container>;
}
