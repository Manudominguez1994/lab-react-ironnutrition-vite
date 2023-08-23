import { Row, Divider } from "antd";
import "./App.css";
import FoodList from "./components/FoodList";

function App() {
  
  return (
    <div className="App">
      <Divider>Lista de Comida</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
       <FoodList/>
       </Row>
    </div>
  );
}

export default App;
