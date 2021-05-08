import { Container } from "./styles";
import universityImg from "../../assets/img4.png";

export function University() {
  return (
    <Container>
      <h3>Conheça as universidades do Estado do Rio de Janeiro</h3>

      <div>
        <img src={universityImg} alt="" />
        <div>
          <h3>Universidade Federal Rural do Rio de Janeiro (UFRRJ)</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam orci
            felis, enim nec tincidunt nec, quisque pellentesque. Ac quisque
            habitant aliquam adipiscing mattis. Elementum egestas faucibus
            habitant aliquam. Tincidunt aliquam et nec elementum mauris
            consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nullam orci felis, enim nec tincidunt nec, quisque
            pellentesque. Ac quisque habitant aliquam adipiscing mattis.
            Elementum egestas faucibus habitant aliquam. Tincidunt aliquam et
            nec elementum mauris consectetur.
          </p>
          <button>SAIBA MAIS</button>
        </div>
      </div>
    </Container>
  );
}
