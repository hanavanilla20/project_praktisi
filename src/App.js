import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./view/home";
import Makanan from "./view/makanan";
import About from "./view/about";
import _header from "./components/header";
import Rendang from "./view/rendang";
import Pempek from "./view/pempek";
import KerakTelor from "./view/kerakTelor";
import Gudeg from "./view/gudeg";
import Papeda from "./view/papeda";
import BikaAmbon from "./view/bikaAmbon";
import AyamBetutu from "./view/ayamBetutu";
import MieAceh from "./view/mieAceh";
import AyamTaliwang from "./view/ayamTaliwang";
import RujakCingur from "./view/rujakCingur";

function App() {
  return (
    <div className="App">
      <_header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/makanan" element={<Makanan />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/rendang" element={<Rendang />}></Route>
        <Route path="/pempek" element={<Pempek />}></Route>
        <Route path="/kerakTelor" element={<KerakTelor />}></Route>
        <Route path="/gudeg" element={<Gudeg />}></Route>
        <Route path="/papeda" element={<Papeda />}></Route>
        <Route path="/bikaAmbon" element={<BikaAmbon />}></Route>
        <Route path="/ayamBetutu" element={<AyamBetutu />}></Route>
        <Route path="/mieAceh" element={<MieAceh />}></Route>
        <Route path="/ayamTaliwang" element={<AyamTaliwang />}></Route>
        <Route path="/rujakCingur" element={<RujakCingur />}></Route>
      </Routes>
    </div>
  );
}

export default App;
