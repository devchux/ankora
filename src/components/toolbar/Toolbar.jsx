import moment from "moment";
import ViewsButton from "../buttons/ViewsButton";
import { useToolbar } from "./hooks/useToolbar";
import { ReactComponent as GreaterThanIcon } from "../../assets/icons/greater-than.svg";
import { ReactComponent as LessThanIcon } from "../../assets/icons/less-than.svg";
import "./styles/toolbar.scss";

const Toolbar = (props) => {
  const { goToBack, goToNext, goToDayView, goToToday, goToWeekView, date } =
    useToolbar(props);

  return (
    <div className="toolbar d-flex justify-content-between">
      <div className="toolbar-nav d-flex align-items-center">
        <div
          className="me-4 d-flex justify-content-center align-items-center navigator"
          onClick={goToBack}
        >
          <LessThanIcon />
        </div>
        <div
          className="me-3 d-flex justify-content-center align-items-center navigator"
          onClick={goToNext}
        >
          <GreaterThanIcon />
        </div>
        <div className="date" onClick={goToToday}>
          {moment(date).format("Do MMMM YYYY")}{" "}
          {moment(date).calendar(null, {
            lastDay: "[Yesterday]",
            sameDay: "[Today]",
            nextDay: "[Tomorrow]",
            lastWeek: "[last] dddd",
            nextWeek: "dddd",
            sameElse: "L",
          })}
        </div>
      </div>
      <div className="toolbar-views">
        <ViewsButton onDayClick={goToDayView} onWeekClick={goToWeekView} />
      </div>
    </div>
  );
};

export default Toolbar;
