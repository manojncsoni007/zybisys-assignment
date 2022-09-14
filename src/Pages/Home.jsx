import React, { useState } from 'react'
import AnimeCard from '../Components/AnimeCard/AnimeCard';
import { useData } from '../Context/data-context'
import { filterByGenres, filterBySearch } from '../Services/filterService';
import { filterGenresData } from '../Data/filterData'
import './Home.css'
import { Droppable } from 'react-beautiful-dnd';

const Home = () => {
    const [filterTerm, setFilterTerm] = useState('');
    const [wishlist, setWishlist] = useState([]);
    const { data, searchTerm } = useData();

    const filteredDataByGenres = filterByGenres(data, filterTerm)
    const filteredData = filterBySearch(filteredDataByGenres, searchTerm);

    return (
        <div className='home-container'>
            <div className='filter-container'>
                {filterGenresData.map(item => (
                    <span className={`categories ${filterTerm == item ? 'active' : ' '}`} onClick={() => setFilterTerm(item)}>{item}</span>
                ))}
            </div>

            <div className='anime-container'>
                <Droppable droppableId='animeListDrop'>
                    {(provided) => (
                        <div
                            className="anime-list_container"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {filteredData.map((item, index) => (
                                <AnimeCard data={item} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <Droppable droppableId='wishlistDrop'>
                    {(provided) => (
                        <div className="wishlist-container"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <h3>Wishlist</h3>
                            {wishlist.map((item, index) => (
                                <AnimeCard data={item} index={index} key={index} />
                            ))}
                            {
                                wishlist.length == 0 && <span>Drag & Drop Here</span>
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

export { Home }