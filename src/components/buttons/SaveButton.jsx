import './styles/saveButton.scss'

const SaveButton = ({ value, onClick }) => {
  return (
    <button className="save-button" onClick={onClick}>
      {value}
    </button>
  )
}

export default SaveButton
