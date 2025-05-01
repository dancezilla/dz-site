import { Home } from "@/components/Home/Home";
// import { Gallery } from "@/components/Gallery/Gallery";
import { About } from "./components/content/About/About";
import { Price } from "./components/Content/Price/Price";
import { HowItWorks } from "./components/content/HowItWorks/HowItWorks";
import { Footer } from "./components/Footer/Footer";
import "@/App.scss";

export function App() {
  return (
    <div className='App'>
      <main>
        <Home />
        <About />
        <HowItWorks />
        <Price />
        {/* <Gallery /> */}
        <Footer />
      </main>
    </div>
  );
}
