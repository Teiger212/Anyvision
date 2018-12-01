import React from 'react';
import './Input.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const input = (props) => {
    return (
        <div className="input">
            <input type="text" placeholder="Search artists" onKeyDown={props.keyPress} className="text-box" onChange={props.changed} value={props.filter}/>
            <button className="search-button">
                <FontAwesomeIcon icon={faSearch} onClick={props.search}/>
            </button>
        </div>
    )
}

export default input;