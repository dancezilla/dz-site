import { Home } from "@/components/Home/Home";
import { Gallery } from "@/components/Gallery/Gallery";
import { About } from "./components/Content/About";
import { HowItWorks } from "./components/Content/HowItWorks";
import "@/App.scss";

export function App() {
  return (
    <div className='App'>
      <main>
        <Home />
        <About />
        <HowItWorks />
        <Gallery />
        <footer></footer>
      </main>
    </div>
  );
}
