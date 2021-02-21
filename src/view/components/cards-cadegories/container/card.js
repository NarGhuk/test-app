import React from 'react';

export default function MediaCard({data:{name,image,id},url, toggleCard, selectedCards}) {

    return (
            <div className="card">
                <a href={url} target="_blank" rel="noreferrer">
                <img src={image} className="card-image" alt={''}/>
                <div className="card-desc">
                    {name}
                </div>
                </a>
                <div className="card-actions">
                    <button   onClick={() => toggleCard(id)} type='button' className='card-action-readMore'>{!selectedCards.includes(id) ? "Add" : "Selected"}</button>
                </div>
            </div>
    );
}