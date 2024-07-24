import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import MyFooter from "./Components/MyFooter/MyFooter";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import MyAdmin from "./Pages/Admin/MyAdmin/MyAdmin";
import UserAdmin from "./Pages/Admin/UserAdmin/UserAdmin";
import ContactAdmin from "./Pages/Admin/ContactAdmin/ContactAdmin";
import ServicesAdmin from "./Pages/Admin/ServicesAdmin/ServicesAdmin";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import UpdateServices from "./Pages/Admin/UpdateServices/UpdateServices";
import UpdateUser from "./Pages/Admin/UpdateUser/UpdateUser";
import Logout from "./Pages/Logout/Logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<MyAdmin />}>
            <Route path="user" element={<UserAdmin />} />
            <Route path="contact" element={<ContactAdmin />} />
            <Route path="services" element={<ServicesAdmin />} />
          </Route>

          <Route
            path="/admin/services/:id/update"
            element={<UpdateServices />}
          />
          <Route path="/admin/user/:id/update" element={<UpdateUser />} />
          <Route path="/user/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
