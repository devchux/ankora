import Toolbar from "../../components/toolbar/Toolbar";
import DoctorTab from "../../components/doctors/DoctorTab";
import Event from "../../components/events/Event";

export const defaultEvents = [
  {
    id: 0,
    title: "Dental Check",
    patient: "Ronaldo",
    doctor: "Marvin T.",
    notes: "",
    indicator: "normal",
    urgency: "normal",
    start: new Date(2021, 9, 6, 9, 0, 0),
    end: new Date(2021, 9, 6, 13, 0, 0),
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
    start: new Date(2021, 9, 6, 14, 0, 0),
    end: new Date(2021, 9, 6, 16, 30, 0),
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
    start: new Date(2021, 9, 6, 8, 30, 0),
    end: new Date(2021, 9, 6, 12, 30, 0),
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
    start: new Date(2021, 9, 6, 7, 0, 0),
    end: new Date(2021, 9, 6, 10, 30, 0),
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
    start: new Date(2021, 9, 6, 1, 0, 0),
    end: new Date(2021, 9, 6, 1, 10, 0),
    resourceId: 4,
  },
];

export const resources = [
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

export const components = {
  toolbar: Toolbar,
  event: Event,
};

export const customStyles = {
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