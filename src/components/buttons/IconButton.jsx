import "./styles/iconButton.scss";

const IconButton = ({ value, onClick, icon, isCancel, isCheckIn }) => {
  return (
    <button
      onClick={onClick}
      className={`btn icon-button ${isCheckIn ? "is-check-in" : ""} ${
        isCancel ? "is-cancel" : ""
      }`}
    >
      {value} {icon}
    </button>
  );
};

export default IconButton;
