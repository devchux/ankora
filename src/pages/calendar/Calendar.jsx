import {
  Calendar as DefaultCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "./styles/calendar.scss";
import Toolbar from "../../components/toolbar/Toolbar";
import DoctorTab from "../../components/doctors/DoctorTab";
import Event from "../../components/events/Event";
import { useState } from "react";
import Modal from "react-modal";
import AddAppointment from "../../components/appointment/AddAppointment";
import ViewAppointment from "../../components/appointment/ViewAppointment";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Calendar() {
  const localizer = momentLocalizer(moment);
  const [viewMode, setViewMode] = useState("day");
  const [modalView, setModalView] = useState("add appointment");
  const [selectedEvent, setSelectedEvent] = useState({});

  const events = [
    {
      id: 0,
      title: "Dental Check",
      patient: "Ronaldo",
      doctor: "Marvin T.",
      notes: "",
      indicator: "normal",
      urgency: "normal",
      start: new Date(2021, 9, 3, 9, 0, 0),
      end: new Date(2021, 9, 3, 13, 0, 0),
      resourceId: 1,
    },
    {
      id: 1,
      title: "MS training",
      patient: "Ronaldo",
      doctor: "Marvin T.",
      notes: "",
      indicator: "normal",
      urgency: "normal",
      start: new Date(2021, 9, 3, 14, 0, 0),
      end: new Date(2021, 9, 3, 16, 30, 0),
      resourceId: 2,
    },
    {
      id: 2,
      title: "Team lead meeting",
      patient: "Ronaldo",
      doctor: "Marvin T.",
      notes: "",
      indicator: "normal",
      urgency: "normal",
      start: new Date(2021, 9, 3, 8, 30, 0),
      end: new Date(2021, 9, 3, 12, 30, 0),
      resourceId: 3,
    },
    {
      id: 3,
      isAdd: true,
      title: "Add a new appointment",
      urgency: "add",
      start: new Date(),
      end: new Date(new Date().getTime() + 10 * 60000),
      resourceId: 1,
    },
    {
      id: 11,
      title: "Birthday Party",
      patient: "Ronaldo",
      doctor: "Marvin T.",
      notes: "",
      urgency: "high",
      start: new Date(2021, 9, 3, 7, 0, 0),
      end: new Date(2021, 9, 3, 10, 30, 0),
      resourceId: 4,
    },
    {
      id: 12,
      title: "Sweet Love",
      patient: "Ronaldo",
      doctor: "Marvin T.",
      notes: "",
      indicator: "serious",
      urgency: "extreme",
      start: new Date(2021, 9, 3, 1, 0, 0),
      end: new Date(2021, 9, 3, 1, 10, 0),
      resourceId: 4,
    },
  ];

  const resources = [
    { resourceId: 1, resourceTitle: <DoctorTab /> },
    {
      resourceId: 2,
      resourceTitle: (
        <DoctorTab name="Mayowa A." backgroundColor="rgba(211, 255, 213, 1)" />
      ),
    },
    {
      resourceId: 3,
      resourceTitle: (
        <DoctorTab name="Clement Q." backgroundColor="rgba(255, 211, 217, 1)" />
      ),
    },
    {
      resourceId: 4,
      resourceTitle: (
        <DoctorTab name="Otca Devor" backgroundColor="rgba(225, 211, 255, 1)" />
      ),
    },
    {
      resourceId: 5,
      resourceTitle: (
        <DoctorTab
          name="Hellia Satun"
          backgroundColor="rgba(255, 232, 211, 1)"
        />
      ),
    },
  ];

  const components = {
    toolbar: Toolbar,
    event: Event,
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      borderRadius: "15px",
      width: "436px",
      transform: "translate(-50%, -50%)",
    },
  };

  const ModalMapper = {
    "add appointment": AddAppointment,
    "view appointment": ViewAppointment,
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  let ModalComponent = ModalMapper[modalView];

  return (
    <div
      className={`calendar-wrapper ${modalIsOpen ? "is-modal" : ""} ${
        viewMode === "day" ? "day" : ""
      }`}
    >
      <DefaultCalendar
        selectable
        localizer={localizer}
        events={events}
        defaultView={Views.DAY}
        onSelectEvent={(event) => {
          if (event.isAdd) {
            setModalView("add appointment");
          } else {
            setSelectedEvent(event);
            setModalView("view appointment");
          }
          openModal();
        }}
        views={["day", "week"]}
        titleAccessor="title"
        resources={resources}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
        components={components}
        eventPropGetter={(event, start, end) => {
          let interval = end - start;

          return {
            className:
              interval > 600000 ? "show-event-node" : "remove-event-node",
            style: {
              border: "none",
            },
          };
        }}
        onView={(view) => setViewMode(view)}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalComponent
          closeModal={closeModal}
          setModalView={setModalView}
          event={selectedEvent}
        />
      </Modal>
    </div>
  );
}

export default Calendar;
