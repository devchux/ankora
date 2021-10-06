import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as PeopleIcon } from "../../assets/icons/people.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";

export const navItems = ["Quick Actions", "Manage"];

export const navSubItems = {
  "Quick Actions": [
    {
      name: "Search Anything",
      icon: SearchIcon,
      className: "d-flex align-items-center gap-2 nav-sub-item search",
    },
    {
      name: "Add a New Patient",
      icon: PlusIcon,
      className: "d-flex align-items-center gap-2 nav-sub-item add-patient",
    },
  ],
  Manage: [
    {
      name: "Calendar",
      icon: CalendarIcon,
      className: "d-flex align-items-center text-white gap-2 nav-sub-item calendar",
    },
    {
      name: "Manage Patients",
      icon: PeopleIcon,
      className: "d-flex align-items-center gap-2 nav-sub-item manage-patients",
    },
    {
      name: "Settings",
      icon: SettingsIcon,
      className: "d-flex align-items-center gap-2 nav-sub-item settings",
    },
  ],
};
