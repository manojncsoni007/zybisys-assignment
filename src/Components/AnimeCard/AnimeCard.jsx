import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import './AnimeCard.css'

const AnimeCard = (props) => {
    const { title, images, rating, mal_id } = props.data;
    const index = props.index;
    const navigate = useNavigate();

    return (
        <Draggable draggableId={mal_id.toString()} index={index}>
            {(provided) => (
                <div 
                className='anime-card' 
                onClick={() => navigate(`/AnimesDetails/${mal_id}`)}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}>
                    <img src={images.jpg.image_url} alt={title} />
                    <div className="title-container"><p className='title'>{title}</p></div>
                    <p className='rating'>{rating}</p>
                </div>
            )}

        </Draggable>

    )
}

export default AnimeCard