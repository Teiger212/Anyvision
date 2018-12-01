import React from 'react';

import './SearchItem.scss';

const searchItem = (props) => {
    const item = props.details;
    return (
        <div className="search-item" onClick={props.clicked}>
            <div className="search-item-video-image">
                <img src={item.artworkUrl100 } alt='artwork' />
            </div>
            <div className="middle">
                <div className="desc">{item.artistName} - {item.trackName}</div>
            </div>
        </div>
    )
}

export default searchItem;