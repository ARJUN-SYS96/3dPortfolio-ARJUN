
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllTechnologies from "./components/AllTechnologies"; // for /techstack
import NotFound from "./components/NotFound";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-technologies" element={<AllTechnologies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
