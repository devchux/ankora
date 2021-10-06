import { useState } from "react";

export const useToolbar = (props) => {
  const [viewState, setViewState] = useState("day");

  const activateButton = (element) => {
    const buttons = document.querySelectorAll(".views-button button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    element.classList.add("active");
  };

  const goToDayView = (e) => {
    activateButton(e.target);
    props.onView("day");
    setViewState("day");
  };

  const goToWeekView = (e) => {
    activateButton(e.target);
    props.onView("week");
    setViewState("week");
  };

  const goToBack = () => {
    let view = viewState;
    let mDate = props.date;
    let newDate;
    if (view === "month") {
      newDate = new Date(mDate.getFullYear(), mDate.getMonth() - 1, 1);
    } else if (view === "week") {
      newDate = new Date(
        mDate.getFullYear(),
        mDate.getMonth(),
        mDate.getDate() - 7,
        1
      );
    } else {
      newDate = new Date(
        mDate.getFullYear(),
        mDate.getMonth(),
        mDate.getDate() - 1,
        1
      );
    }
    props.onNavigate("prev", newDate);
  };

  const goToNext = () => {
    let view = viewState;
    let mDate = props.date;
    let newDate;
    if (view === "month") {
      newDate = new Date(mDate.getFullYear(), mDate.getMonth() + 1, 1);
    } else if (view === "week") {
      newDate = new Date(
        mDate.getFullYear(),
        mDate.getMonth(),
        mDate.getDate() + 7,
        1
      );
    } else {
      newDate = new Date(
        mDate.getFullYear(),
        mDate.getMonth(),
        mDate.getDate() + 1,
        1
      );
    }
    props.onNavigate("next", newDate);
  };

  const goToToday = () => {
    const now = new Date();
    props.date.setMonth(now.getMonth());
    props.date.setYear(now.getFullYear());
    props.date.setDate(now.getDate());
    props.onNavigate("current");
  };
  return {
    goToBack,
    goToNext,
    goToDayView,
    goToToday,
    goToWeekView,
    date: props.date,
  };
};
