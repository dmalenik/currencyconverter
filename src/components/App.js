import Container from "react-bootstrap/Container";
import Intro from "./Intro/Intro";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Container>
      <Intro />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
