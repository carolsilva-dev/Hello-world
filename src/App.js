import { BrowserRouter, Routes,Route } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/menu";
import Rodape from "componentes/rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/naoEncontrada";
import ScrollToTop from "componentes/scrollToTop";



function App() {
  return (
  <BrowserRouter>
     <ScrollToTop/>
     <Menu />
 
  <Routes>
    <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />}/>
          <Route path="/sobremim" element={<SobreMim />}/>
    </Route>

    {/* Na rota "/", a estrutura a ser renderizada é:  
        <PaginaPadrao> 
              <Inicio />
        </PaginaPadrao>
       Na rota "/"sobremim, a estrutura a ser renderizada é:  
          <PaginaPadrao> 
                <SobreMim />
          </PaginaPadrao>
    */}
       <Route path="posts/:id/*" element={<Post />} />
      <Route path="*" element={<NaoEncontrada/>} />
  </Routes>


     <Rodape />
  </BrowserRouter>

    );
}

export default App;
