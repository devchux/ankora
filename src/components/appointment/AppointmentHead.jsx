import "./styles/appointmentHead.scss";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

const AppointmentHead = ({ children, closeModal }) => {
  return (
    <div className="d-flex justify-content-between align-items-center appointment-head">
      <div className="title">{children}</div>
      <div
        className="d-flex justify-content-center align-items-center cancel"
        onClick={closeModal}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default AppointmentHead;
