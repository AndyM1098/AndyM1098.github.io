import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume";
import Layout from "./layout";
import ContactMe from "./ContactMe";
import Projects from "./Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<ContactMe/>}/>
      </Route>
    </Routes>
  );
}

export default App;
