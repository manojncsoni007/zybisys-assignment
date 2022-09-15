import './App.css';
import { Routes, Route } from 'react-router-dom'
import { AnimesDetail, Home } from './Pages';
import Navbar from './Components/Navbar/Navbar';
import { DragDropContext } from 'react-beautiful-dnd';
import { useData } from './Context/data-context';

function App() {
  const onDrag = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add, animeList, wishlistDrop

    if (source.droppableId === 'animeListDrop') {
      add = animeList[source.index]
      animeList.splice(source.index, 1)
    } else {
      add = wishlistDrop[source.index]
      wishlistDrop.splice(source.index, 1)
    }

    if(destination.droppableId === 'animeListDrop'){
      animeList.splice(destination.index, 0 , add);
    } else {
      wishlistDrop.splice(destination.index, 0, add);
    }
  }

  return (
    <DragDropContext onDragEnd={onDrag}>
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
