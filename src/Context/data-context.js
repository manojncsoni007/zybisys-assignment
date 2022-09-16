import { useState, useEffect, createContext, useContext } from "react";
import axios from 'axios'

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [wishlist, setWishlist] = useState(
        localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])
    const [searchTerm, setSearchTerm] = useState('');

    console.log(wishlist)

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://api.jikan.moe/v4/anime');
            const responseData = response.data.data;
            setData(responseData);
        })()
    }, [])

    return (
        <DataContext.Provider value={{ data, setData, wishlist, setWishlist, searchTerm, setSearchTerm }}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => useContext(DataContext);

export { DataProvider, useData }