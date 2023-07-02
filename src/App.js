import { About } from "./components/About";
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
      <SocialLinks/>
    </div>
  );
}

export default App;
