import Button from "./Components/button";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="content">  <Home /> </div>
        <Button/>
    </div>
  );
}

export default App;
