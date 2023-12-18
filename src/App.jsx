import "./App.css";
import LeftNavbar from "./components/LeftNavbar";
import Message from "./components/Message";
import RigthNav from "./components/RigthNav";

function App() {
  return (
    <>
      <div className="wrapper">
        <LeftNavbar />
        <Message />
        <RigthNav />
      </div>
    </>
  );
}

export default App;
