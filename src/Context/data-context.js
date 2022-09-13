import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    console.log(data);

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api.jikan.moe/v4/anime');
            const responseData = response.data.data;
            setData(responseData);
        })()
    }, [])

    return (
        <DataContext.Provider value={{ data, searchTerm, setSearchTerm }}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData }