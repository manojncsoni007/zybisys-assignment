import './App.css';
import { Routes, Route } from 'react-router-dom'
import { AnimesDetail, Home } from './Pages';
import Navbar from './Components/Navbar/Navbar';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AnimesDetails/:animeId' element={<AnimesDetail />} />
      </Routes>
    </div>
  );
}

export default App;
