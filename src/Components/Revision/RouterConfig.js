import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
const RouterConfig = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path = "/about" element={<About />} />
        </Routes>
    )
}
export default RouterConfig;