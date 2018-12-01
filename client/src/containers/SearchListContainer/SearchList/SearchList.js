import React, { Component } from 'react';

import './SearchList.scss';

import SearchItem from '../../../components/SearchItem/SearchItem';

class searchList extends Component {

    render() {
        let message = <h1>Go get the info, type in the searchbar</h1>;
    
        if (this.props.items) {
            message = this.props.items.map((item) => {
                return (
                    <SearchItem
                        key={item.trackId}
                        details={item}
                        clicked={ () => this.props.navigateToResultItem(item)}/>
                )
            });
        }

        return (
            <div className="search-list">
                { message }
            </div>
        )
    }
}

export default searchList;