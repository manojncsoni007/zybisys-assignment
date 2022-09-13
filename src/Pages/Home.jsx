import React, { useState } from 'react'
import AnimeCard from '../Components/AnimeCard/AnimeCard';
import { useData } from '../Context/data-context'
import { filterByGenres, filterBySearch } from '../Services/filterService';
import { filterGenresData } from '../Data/filterData'
import './Home.css'

const Home = () => {
    const [filterTerm, setFilterTerm] = useState('');
    const { data, searchTerm } = useData();

    const filteredDataByGenres = filterByGenres(data, filterTerm)
    const filteredData = filterBySearch(filteredDataByGenres, searchTerm);

    return (
        <div className='home-container'>
            <div className='filter-container'>
                {filterGenresData.map(item => (
                    <label>
                        <input type='radio' value={item} name='filter' onClick={() => setFilterTerm(item)} /><span>{item}</span>
                    </label>
                ))}
            </div>

            <div className='anime-container'>
                {filteredData.map(item => (
                    <AnimeCard data={item} />
                ))}
            </div>
        </div>
    )
}

export { Home }