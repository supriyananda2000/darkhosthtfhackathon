import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/boxicons/css/boxicons.min.css";
import Sidebar from "./comp/Sidebar";
import Navbar from "./comp/Navbar";
import Main from "./comp/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
