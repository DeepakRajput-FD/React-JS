import React from "react";
import CreateUser from "./FireBaseTask/CreateUser";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Existing from "./FireBaseTask/Existing";
import UserDashBoard from "./FireBaseTask/UserDashBoard";
import CreateAdmin from "./FireBaseTask/CreateAdmin";
import MainRole from "./FireBaseTask/MainRole";
import ExistingAdmin from "./FireBaseTask/ExistingAdmin";
import AdminDashBoard from "./FireBaseTask/AdminDashBoard";
import AdminProFile from "./FireBaseTask/AdminProFile";
import UserEditPage from "./FireBaseTask/UserEditPage";
import AddPost from "./FireBaseTask/AddPost";
// import ViewPost from "./FireBaseTask/ViewPost";
import NavBar from "./FireBaseTask/NavBar";
import ChatScreen from "./FireBaseTask/ChatScreen";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* for admin */}
        <Route path="/adminCreate" element={<CreateAdmin/>} ></Route>
        <Route path="/" element={<ExistingAdmin/>}></Route>
        <Route path="/AdminDashboard" element={<AdminDashBoard/>}  ></Route>

        {/* profile */}
        <Route path="/Profile" element={<AdminProFile/>} ></Route>

        {/* for Edit */}
        <Route path="/EditPage/:uid" element={<UserEditPage/>} ></Route>



    {/* for user */}

      
        <Route path="/userbar" element={<NavBar/>} ></Route>

        <Route path="/CreateUser" element={<CreateUser/>} ></Route>
         <Route path="/userExist" element={<Existing/>}></Route>
          <Route path="/Dashboard" element={<UserDashBoard/>}  ></Route> 


            {/* <Route path="/" element={<MainRole/>} ></Route> */}

    {/* add post */}
    <Route path="/addpost" element={<AddPost/>} ></Route>

    {/* for view post */}
    {/* <Route path="/viewpost" element={<ViewPost/>} ></Route> */}

    <Route path="/chatscreen/:uid" element={<ChatScreen/>} ></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
