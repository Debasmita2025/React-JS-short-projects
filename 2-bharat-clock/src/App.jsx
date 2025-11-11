import ClockHeading from "./components/clockHeading";
import ClockSlogan from "./components/clockslogan";
import CurrentTime from "./components/currenttime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <center className="">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
