import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, clickedItem} = props
  const {suggestion} = suggestionDetails
  const onClicked = () => {
    clickedItem(suggestion)
  }

  return (
    <li className="item-container">
      <p className="suggetion-title">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow-icon"
        className="arrow-img"
        onClick={onClicked}
      />
    </li>
  )
}
export default SuggestionItem
