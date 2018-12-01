import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from '../components/Header/Header';
import SearchListContainer from './SearchListContainer/SearchListContainer';
import SearchItemFull from './SearchListContainer/SearchList/SearchItemFull/SearchItemFull';
import reducer from '../store/reducer';

import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


library.add([faSearch, faArrowCircleLeft]);


const App = () => {
    const store = createStore(reducer);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Route path="/" exact component={SearchListContainer} />
                    <Route path="/item/:term" component={SearchItemFull} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
