import Content from "./components/Content/Content";
import { Home } from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <Content />
        <Gallery />
        <footer></footer>
      </main>
    </div>
  );
}

export default App;
