import './App.css';
import { Routes, Route } from 'react-router-dom'
import { AnimesDetail, Home } from './Pages';
import Navbar from './Components/Navbar/Navbar';
import { DragDropContext } from 'react-beautiful-dnd';
import { useData } from './Context/data-context';

function App() {
  const { data, setData, wishlist, setWishlist } = useData();

  const onDrag = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let active = data;
    let complete = wishlist; 

    if (source.droppableId === "animeListDrop") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setWishlist(complete);
    setData(active);
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
