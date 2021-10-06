import SaveButton from "../buttons/SaveButton";
import "./styles/addAppointment.scss";
import AppointmentHead from "./AppointmentHead";

const AddAppointment = ({ closeModal }) => {
  return (
    <div className="add-appointment">
      <AppointmentHead closeModal={closeModal}>Add Appointment</AppointmentHead>
      <div className="body">
        <div className="form-group">
          <label htmlFor="title">Type</label>
          <select className="form-control">
            <option>Full Check</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <div className="d-flex justify-content-between date-time-wrapper">
            <div className="date">
              <input type="date" className="form-control" />
            </div>
            <div className="time">
              <input type="time" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <div className="d-flex justify-content-between date-time-wrapper">
            <div className="date">
              <input type="date" className="form-control" />
            </div>
            <div className="time">
              <input type="time" className="form-control" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title">Attach Patient</label>
          <select className="form-control">
            <option>Ronaldo D.</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Attending Physical</label>
          <select className="form-control">
            <option>Dr. Afolabi</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Notes</label>
          <input
            type="text"
            placeholder="New Appoinment"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <SaveButton value="Save" />
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
