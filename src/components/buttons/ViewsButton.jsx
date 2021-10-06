import './styles/views-button.scss';

const ViewsButton = ({ onDayClick, onWeekClick }) => {
  return (
    <div className="views-button">
      <button onClick={onDayClick} className="btn active">Day</button>
      <button onClick={onWeekClick} className="btn">Week</button>
    </div>
  )
}

export default ViewsButton
