import React from "react"
import ReactDOM from "react-dom/client" ;
import { BrowserRouter , Routes , Route , Link} from "react-router-dom"
import Layout from "../Portfolio/components/Layout";
import Home from "./pages/Home"
import ProjectDetail from "./pages/Projects/ProjectDetails";
import Projects from "./pages/Projects/Projects";


function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            
            <Route path="/:id" element={<ProjectDetail/>} />

            </Route>
        </Routes>
        </BrowserRouter>
    )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);