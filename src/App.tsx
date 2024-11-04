import "./App.css";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./lang.ts";

function App() {
  return (
    <BackgroundWrapper>
      <Header />
      <Content />
      <Footer />
    </BackgroundWrapper>
  );
}

export default App;
