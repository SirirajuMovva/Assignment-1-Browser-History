import './index.css'

const EachHistory = props => {
  const {single, removingItem} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = single

  const passingId = () => {
    removingItem(id)
  }

  return (
    <li>
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" onClick={passingId} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default EachHistory
