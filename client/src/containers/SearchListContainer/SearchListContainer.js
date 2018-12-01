import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import './SearchListContainer.scss';

import * as actionTypes from '../../store/actions';

import Wrapper from '../../hoc/wrapper';
import Input from '../../components/Input/Input';
import SearchList from './SearchList/SearchList';
import ToggleTop from '../../components/ToggleTop/ToggleTop';
import HistoryList from '../../components/History/HistoryList';

class SearchListContainer extends Component {
    state = {
        filter: '',
        searchResults: null,
        isTopSearches: false,
    };

    changeFilter = (e) => {
        let newFilter = this.state.filter.slice();
        newFilter = e.target.value;
        
        this.setState({
          filter: newFilter
        });
    }
    
    keyPress = (e) => {
        if (e.keyCode === 13) {
            this.search(e.target.value);
        } else {
            console.log('ELSE')
        }
    }
    
    search = async(value: string) => {
        if (!value.length) {
            return;
        }

        const data = {term: value.trim().toLowerCase()};
        
        try {
          const response = await axios.get(`/searchItem/${data.term}`);
          
          this.props.onSearch(response.data.data);
        }
        catch(e) {
          console.log(e);
        }
    }
    
    selectionCancelHandler = () => {
        this.setState({
            isSelectedResultItemOpen: false,
            selectedResultItem: null
        });
    }

    navigateToResultItemHandler = (track) => {
        console.log(`routing to app/item/${track.trackId}`);

        this.props.history.push('/item/' + track.trackId, track);
    }

    topSearches = async() => {
        try {
            const response = await axios.get('/searchHistory/10');

            this.props.onButtonToggled(response.data.data)
        }
        catch(e) {
            console.log(e)
        }
    }

    render() {
        const searchListEl = (
            <SearchList
                navigateToResultItem={this.navigateToResultItemHandler}
                items={this.props.searchResults}/>
        )
        
        const historyEl = (
            <HistoryList items={this.props.historyItems}></HistoryList>
        )

        return (
            <Wrapper>
                <Input
                    filter={this.state.filter}
                    changed={(event) => this.changeFilter(event)}
                    search={(e) => this.search(this.state.filter)}
                    keyPress={(e) => this.keyPress(e)} />

                <ToggleTop isTopSearches={this.props.isTopSearches} toggleTopSearch={this.topSearches} />
                {this.props.isTopSearches ? searchListEl : historyEl }
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        isTopSearches: state.isTopSearches,
        searchResults: state.searchResults,
        historyItems: state.historyItems
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onButtonToggled: (items) => dispatch({type: actionTypes.TOGGLE_TOP_SEARCHES, items}),
        onSearch: (term) => dispatch({type: actionTypes.DISPLAY_SEARCH_RESULTS, term})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchListContainer);