import { About } from "./components/About";
import { Contact } from "./components/Contact";
import Experiencie from "./components/Experiencie";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import {Portfolio} from "./components/Portfolio";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiencie/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
