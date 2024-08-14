import "./App.css";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <BackgroundWrapper>
      <Header />
      <Content />
    </BackgroundWrapper>
  );
}

export default App;
