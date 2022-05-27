import { Route, Routes } from "react-router-dom";
import AddItem from "./components/addItem/AddItem";
import Home from "./components/home/Home";
import AddUser from "./components/addUser/AddUser";
import UpdateItem from "./components/updateUser/UpdateItem";
import Inventory from "./components/inventory/Inventory";
import Items from "./components/item/Items";
import Login from "./components/login/Login";
import SocialLogin from "./components/login/SocialLogin";
import Header from "./components/header/Header";
import Register from "./components/register/Register";
import NotFound from "./components/notFound/NotFound";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog";
import Summery from "./components/summery/Summery";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route path="user/add" element={<AddUser />}></Route> */}
        <Route
          path="addItem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route path="items" element={<Items />}></Route>
        <Route path="inventory" element={<Inventory />}></Route>
        <Route path="socialLogin" element={<SocialLogin />}></Route>
        <Route path="summery" element={<Summery />}></Route>

        <Route
          path="update/:id"
          element={
            <RequireAuth>
              <UpdateItem />{" "}
            </RequireAuth>
          }
        ></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
