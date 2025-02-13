import './App.css'
import { Navbar } from './components/navabar/Navbar'
import { Main } from './components/main/main'
import { Footer } from './components/footer/Footer'

function App() {

  return (
    <>
      {/* Puede usarse la importación como autocierre o apertura y cierre */}      <Navbar />

      <Main></Main>
   
      <Footer></Footer>

    </>
  );
}

export default App;
