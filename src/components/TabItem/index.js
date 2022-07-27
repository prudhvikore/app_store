import './index.css'

const TabItem = props => {
  const {eachTab, changeCategory, isSelected} = props
  const {tabId, displayText} = eachTab

  const onChangeTab = () => {
    changeCategory(tabId)
  }

  const listClass = isSelected ? 'selected-list' : ''
  const btnClass = isSelected ? 'selected-btn' : ''

  return (
    <li className={`list-item ${listClass}`} onClick={onChangeTab}>
      <button type="button" className={`tab-name ${btnClass}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
