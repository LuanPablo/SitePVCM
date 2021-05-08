import { Navbar } from "../../components/Navbar";
import { Welcome } from "../../components/Welcome";
import { Registrations } from "../../components/Registrations";
import { Container } from "./styles";
import { Depositions } from "../../components/Depositions";
import { University } from "../../components/University";

export function LandingPage() {
  return (
    <Container>
      <Navbar />
      <Welcome />
      <Registrations/>
      <Depositions/>
      <University/>
    </Container>
  );
}
