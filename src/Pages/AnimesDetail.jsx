import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useData } from '../Context/data-context';
import './AnimeDetail.css'

const AnimesDetail = () => {
    const params = useParams();
    const { data } = useData();
    const animeDetail = data.find(item => item.mal_id == params.animeId)

    return (
        <div className='anime-details_container'>
            <Link to='/' className='go-back_btn'>
                Go Back
            </Link>

            <div className='anime-detail_card'>
                <div className='image-section'>
                    <img src={animeDetail.images.jpg.image_url} />
                </div>
                <div className='info-section'>
                    <h3 className='title'>{animeDetail.title}</h3>
                    <p>{animeDetail.synopsis}</p>
                    <p><b>Episodes :</b> {animeDetail.episodes}</p>
                    <p><b>Date:</b> {animeDetail.aired.from}</p>
                    <a href={animeDetail.trailer.embed_url} className='trailer'>Watch Trailer on Youtube</a>
                </div>
            </div>
        </div>
    )
}

export { AnimesDetail }