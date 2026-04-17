import JarshanePortfolio from './pages/JarshanePortfolio';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<JarshanePortfolio />} />
        <Route path="/home" element={<JarshanePortfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
