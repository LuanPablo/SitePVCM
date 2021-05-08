import { Navbar } from "../../components/Navbar";
import { Welcome } from "../../components/Welcome";
import { Registrations } from "../../components/Registrations";
import { Container } from "./styles";

export function LandingPage() {
  return (
    <Container>
      <Navbar />
      <Welcome />
      <Registrations/>
    </Container>
  );
}
