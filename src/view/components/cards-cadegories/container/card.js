import React from 'react';

export default function MediaCard({data:{name,image},url}) {
    return (
            <div className="card">
                <a href={url} target="_blank">
                <img src={image} className="card-image"/>
                {/*<div className="card-title">*/}

                {/*</div>*/}
                <div className="card-desc">
                    {name}
                </div>
                </a>
                <div className="card-actions">
                    <button type='button' className='card-action-readMore'>Read More</button>
                </div>
            </div>
    );
}