import React from 'react'

class SearchBar extends React.Component {
    state ={ term: '' }

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.term)
    }

    render() {
        return (
        <div className="ui segment">
            <div className="field">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={(event) => this.setState({term: event.target.value})}/>
                </form>
            </div>
        </div>
        )
    }
}

export default SearchBar