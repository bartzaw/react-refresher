import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'


class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 58fe113ec5ed697ddb8a376a3bbf634dab6613cb35467de6a54a904279408976',
            },
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default App