import { Container } from "./styles";
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
          <img src={AvatarImg} alt="" />
          <div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              aliquam cursus ultricies tortor adipiscing amet massa. Sagittis
              justo, et egestas vitae id augue. Adipiscing aliquam viverra ac
              convallis varius blandit integer. Nibh rutrum mattis euismod purus
              faucibus urna.”
            </p>
            <h4>Paula Martins</h4>
          </div>
        </div>
        <button>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </Container>
  );
}
