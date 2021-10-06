import { ReactComponent as VerticalDotsIcon } from "../../assets/icons/vertical-dots.svg";
import defaultImage from "../../assets/images/man.png";
import "./styles/doctorTab.scss";

const DoctorTab = ({ imageSrc, name, backgroundColor }) => {
  return (
    <div
      style={{ backgroundColor }}
      className="d-flex align-items-center justify-content-between doctor-tab"
    >
      <div className="left">
        <div>
          <img src={imageSrc} alt={`Dr. ${name}`} />
        </div>
        <div>{name}</div>
      </div>
      <div className="right">
        <VerticalDotsIcon />
      </div>
    </div>
  );
};

DoctorTab.defaultProps = {
  imageSrc: defaultImage,
  name: "Marvin T.",
  backgroundColor: "rgba(211, 229, 255, 1)",
};

export default DoctorTab;
