import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  clickedItem = value => {
    this.setState({searchInput: value})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(eachElement =>
      eachElement.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo-img"
          alt="google logo"
        />
        <div className="display-conatiner">
          <div className="input-conatiner">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              className="search-input"
              onChange={this.onChangeInput}
              placeholder="Search Google"
              value={searchInput}
            />
          </div>
          <ul className="suggest-container">
            {searchResult.map(eachElement => (
              <SuggestionItem
                suggestionDetails={eachElement}
                key={eachElement.id}
                clickedItem={this.clickedItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
