import { BrowserRouter, Route } from "react-router-dom";
import LeftNavbar from "./components/navbar/LeftNavbar";
import Calendar from "./pages/calendar/Calendar";

function App() {
  return (
    <BrowserRouter>
      <LeftNavbar />
      <Route path="/" exact component={Calendar} />
    </BrowserRouter>
  );
}

export default App;
