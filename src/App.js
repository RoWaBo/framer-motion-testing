import { Route, Routes } from "react-router-dom";
import LayoutTest from "./pages/LayoutTest";

function App() {
  return (<>
    <Routes>
      <Route path='/' element={LayoutTest} />
    </Routes>
  </>);
}

export default App;
