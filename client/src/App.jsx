import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
