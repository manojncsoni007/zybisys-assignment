import './App.css';
import { Routes, Route } from 'react-router-dom'
import { AnimesDetail, Home } from './Pages';
import Navbar from './Components/Navbar/Navbar';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  
  return (
    <DragDropContext onDragEnd={()=>{}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AnimesDetails/:animeId' element={<AnimesDetail />} />
        </Routes>
      </div>
    </DragDropContext>
  );
}

export default App;
