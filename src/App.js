import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Experiencie from "./components/Experiencie";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Experiencie/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
