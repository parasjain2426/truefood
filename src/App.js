import { BrowserRouter as Router, Link } from "react-router-dom";
import { ParentRouter } from "./routers/ParentRouter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ParentRouter />
      </Router>
    </div>
  );
}
