import React from 'react'
import { useNavigate } from 'react-router-dom';
import './AnimeCard.css'

const AnimeCard = ({ data }) => {
    const { title, images, rating, mal_id } = data;
    const navigate = useNavigate();

    return (
        <div className='anime-card' onClick={() => navigate(`/AnimesDetails/${mal_id}`)}>
            <img src={images.jpg.image_url} alt="" />
            <div className="title-container"><p className='title'>{title}</p></div>
            <p className='rating'>{rating}</p>
        </div>
    )
}

export default AnimeCard