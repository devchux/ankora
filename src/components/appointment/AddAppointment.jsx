import SaveButton from "../buttons/SaveButton";
import "./styles/addAppointment.scss";
import AppointmentHead from "./AppointmentHead";
import { useState } from "react";

const AddAppointment = ({ closeModal, setEvents, events, isEdit, event }) => {
  const getDate = (date = new Date()) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    return year + "-" + month + "-" + day;
  };
  const [creds, setCreds] = useState({
    id: 0,
    title: "",
    patient: "",
    doctor: "",
    notes: "",
    indicator: "",
    urgency: "",
    startDate: getDate(),
    startTime: "00:00:00",
    endDate: null,
    endTime: "00:00:00",
    resourceId: 1,
  });
  if (isEdit) {
    setCreds({
      ...event,
      end: undefined,
      startDate: event.start.getDate(),
      startTime: event.start.getTime(),
      endDate: event.end.getDate(),
      endTime: event.end.getTime(),
    });
  }
  const doctorMapper = {
    "Marvin T.": 1,
  };
  const handleChange = (cred, value) => {
    let newCred = { ...creds };
    if (cred === "doctor") {
      newCred = { ...newCred, doctor: value, resourceId: doctorMapper[value] };
    } else {
      newCred = { ...newCred, [cred]: value };
    }
    console.log(newCred);
    setCreds(newCred);
  };

  const handleSubmit = () => {
    const { startDate, startTime, endDate, endTime } = creds;
    const formatCreds = {
      ...creds,
      startDate: undefined,
      startTime: undefined,
      endDate: undefined,
      endTime: undefined,
      start: new Date(`${startDate} ${startTime}`),
      end: new Date(`${endDate} ${endTime}`),
    };
    if (!isEdit) {
      const newEvents = [
        ...events,
        {
          ...formatCreds,
          id: events.length,
        },
      ];
      return setEvents(newEvents);
    }
    const newEvents = events.map((each) => {
      if (each.id === event.id) {
        return formatCreds;
      }
      return each;
    });
    setEvents(newEvents);
    closeModal();
  };
  return (
    <div className="add-appointment">
      <AppointmentHead closeModal={closeModal}>
        Create Appointment
      </AppointmentHead>
      <div className="body">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the appointment title"
            value={creds.title}
            onChange={({ target: { value } }) => handleChange("title", value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <div className="d-flex justify-content-between date-time-wrapper">
            <div className="date">
              <input
                type="date"
                className="form-control"
                min={getDate()}
                value={creds.startDate}
                onChange={({ target: { value } }) =>
                  handleChange("startDate", value)
                }
              />
            </div>
            <div className="time">
              <input
                type="time"
                className="form-control"
                value={creds.startTime}
                onChange={({ target: { value } }) =>
                  handleChange("startTime", value)
                }
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <div className="d-flex justify-content-between date-time-wrapper">
            <div className="date">
              <input
                type="date"
                className="form-control"
                value={creds.endDate}
                min={creds.startDate}
                onChange={({ target: { value } }) =>
                  handleChange("endDate", value)
                }
              />
            </div>
            <div className="time">
              <input
                type="time"
                className="form-control"
                value={creds.endTime}
                onChange={({ target: { value } }) =>
                  handleChange("endTime", value)
                }
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="title">Attach Patient</label>
          <select
            className="form-control"
            onChange={({ target: { value } }) => handleChange("patient", value)}
          >
            <option value="Ronaldo D.">Ronaldo D.</option>
            <option value="Roberto C.">Roberto C.</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Attending Physical</label>
          <select
            className="form-control"
            onChange={({ target: { value } }) => handleChange("doctor", value)}
          >
            <option value="Marvin T.">Dr. Marvin T.</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Notes</label>
          <input
            type="text"
            placeholder="New Appoinment"
            className="form-control"
            onChange={({ target: { value } }) => handleChange("notes", value)}
          />
        </div>
        <div className="form-group">
          <SaveButton value="Save" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
