import {
  Calendar as DefaultCalendar,
  Views,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "./styles/calendar.scss";
import { useState } from "react";
import Modal from "react-modal";
import AddAppointment from "../../components/appointment/AddAppointment";
import ViewAppointment from "../../components/appointment/ViewAppointment";
import SaveButton from "../../components/buttons/SaveButton";
import {
  defaultEvents,
  resources,
  components,
  customStyles,
} from "./constants";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function Calendar() {
  const localizer = momentLocalizer(moment);
  const [viewMode, setViewMode] = useState("day");
  const [modalView, setModalView] = useState("add appointment");
  const [selectedEvent, setSelectedEvent] = useState({});
  const [events, setEvents] = useState(defaultEvents);

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
          setEvents={setEvents}
          events={events}
        />
      </Modal>
      <div className="fixed-create-button">
        <SaveButton
          onClick={() => {
            setModalView("add appointment");
            openModal();
          }}
          value="CREATE"
        />
      </div>
    </div>
  );
}

export default Calendar;
