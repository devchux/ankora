import { ReactComponent as CaretIcon } from "../../assets/icons/caret.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/appointment-plus.svg";
import Dot from "../dot/Dot";
import "./styles/event.scss";

const Event = ({ event: { isAdd, urgency, title, patient, indicator } }) => {
  const styles = {
    add: {
      backgroundColor: "rgba(249, 249, 249, 1)",
      color: "rgba(204, 204, 204, 1)",
    },
    extreme: {
      backgroundColor: "rgba(255, 245, 231, 1)",
      color: "rgba(118, 64, 14, 1)",
    },
    high: {
      backgroundColor: "rgba(252, 255, 231, 1)",
      color: "rgba(103, 118, 14, 1)",
    },
    normal: {
      backgroundColor: "rgba(231, 249, 255, 1)",
      color: "rgba(14, 99, 118, 1)",
    },
  };

  const level = {
    serious: "rgba(244, 205, 106, 1)",
    normal: "rgba(53, 146, 255, 1)",
  };
  return (
    <div
      style={styles[urgency]}
      className={`d-flex ${
        isAdd ? "justify-content-between" : "justify-content-around"
      } align-items-center event`}
    >
      {isAdd ? (
        <>
          <div className="title">{title}</div>
          <div className="add">
            <AddIcon />
          </div>
        </>
      ) : (
        <>
          <div className="title">{title}</div>
          <div className="sub-title">{patient}</div>
          <Dot color={level[indicator]} />
          <div>
            <CaretIcon />
          </div>
        </>
      )}
    </div>
  );
};

Event.defaultProps = {
  event: {
    title: "Full Checkup",
    patient: "Ronaldo",
    indicator: "normal",
    urgency: "normal",
  },
};

export default Event;
