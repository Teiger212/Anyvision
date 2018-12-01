import React from 'react';

import './ToggleTop.scss'

const toggleTop = (props) => {
    return (
        <button className="toggle-button" onClick={props.toggleTopSearch}>{props.isTopSearches ? 'Top 10 searches' : 'Search Results'}</button>
    )
}

export default toggleTop;