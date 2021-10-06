import moment from "moment";
import AppointmentHead from "./AppointmentHead";
import { ReactComponent as UploadIcon } from "../../assets/icons/upload.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";
import { ReactComponent as PenIcon } from "../../assets/icons/pen.svg";
import "./styles/viewAppointment.scss";
import defaultImage from "../../assets/images/man.png";
import IconButton from "../buttons/IconButton";

const ViewAppointment = ({ event, closeModal }) => {
  return (
    <div className="view-appointment">
      <AppointmentHead closeModal={closeModal}>{event.title}</AppointmentHead>
      <div className="body">
        <div className="d-flex justify-content-between align-items-center patient">
          <div className="d-flex gap-2 align-items-center details">
            <div className="image">
              <img src={defaultImage} alt={event.patient} />
            </div>
            <div className="name">{event.patient}</div>
          </div>
          <div className="upload">
            <UploadIcon />
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center clock">
          <div className="icon">
            <ClockIcon />
          </div>
          <div className="period">
            {moment(event.start).format("Do MMMM YYYY, h:mm a")} -{" "}
            {moment(event.end).format("Do MMMM YYYY, h:mm a")}
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center doctor">
          <div className="icon">
            <PersonIcon />
          </div>
          <div className="d-flex gap-2 align-items-center details">
            <div className="image">
              <img src={defaultImage} alt={`Dr. ${event.doctor}`} />
            </div>
            <div className="name">{event.doctor}</div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center button-wrapper">
          <div className="d-flex gap-2 buttons">
            <IconButton value="Check in" isCheckIn />
            <IconButton value="Cancel" isCancel />
          </div>
          <div className="pen">
            <PenIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAppointment;
