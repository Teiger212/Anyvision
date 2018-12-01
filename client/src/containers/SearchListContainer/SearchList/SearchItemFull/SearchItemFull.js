import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

import './SearchItemFull.scss'

class SearchItemFull extends Component {
    
    goToHomePage = () => {
        this.props.history.push('/');
    }
    
    render() {
        const item = this.props.location.state;

        return (
            <div>
                <div className="back">
                    <FontAwesomeIcon className="icon" icon={faArrowCircleLeft} onClick={this.goToHomePage}/>
                </div>
                <div className="item">
                    <div className="item-media-container">
                        <video className="video" width="500" controls>
                            <source src={item.previewUrl} />
                        </video>
                    </div>
                    <div className="item-info-container">
                        <h3 className="item-headline">{item.artistName} - {item.trackName}</h3>
                        <p className="item-summart">Loaded trank id {item.trackId} succesfuly</p>
                        <span>Genre: {item.primaryGenreName}</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default SearchItemFull;