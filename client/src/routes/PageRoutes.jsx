import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Error from "../pages/Error"
import { Logout } from "../pages/Logout"
import Enrollment from "../forms/Enrollment"
import Quiz from "../components/quiz/Quiz"
import MockTest from "../pages/MockTest"

const PageRoutes = () => {
  return <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/enrollment" element={<Enrollment/>} />
      <Route path="/register" element={<Register />}/>
      <Route path="/mocktest" element={<MockTest />}/>
      <Route path="/quiz" element={<Quiz />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/logout" element={<Logout />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
  </>
}

export default PageRoutes