import { Container, RowContainer } from "./styles";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import AvatarImg from "../../assets/avatar.png";

export function Depositions() {
  return (
    <Container>
      <h3>Depoimentos</h3>

      <div>
        <button>
          <IoIosArrowDropleftCircle />
        </button>
        <div>
          <div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              aliquam cursus ultricies tortor adipiscing amet massa. Sagittis
              justo, et egestas vitae id augue. Adipiscing aliquam viverra ac
              convallis varius blandit integer. Nibh rutrum mattis euismod purus
              faucibus urna.”
            </p>
            <RowContainer>
              <h4>Paula Martins</h4>
              <img src={AvatarImg} alt="" />
            </RowContainer>
          </div>
        </div>
        <button>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </Container>
  );
}
