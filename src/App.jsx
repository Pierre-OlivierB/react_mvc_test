import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import UpdateUser from "./components/UpdateUser";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteUser from "./components/DeleteUser";
import Login from "./components/Login";
import Auth from "./components/Auth";

// function getCookies() {
//   var pairs = document.cookie.split(";");
//   var cookies = {};
//   for (var i = 0; i < pairs.length; i++) {
//     var pair = pairs[i].split("=");
//     cookies[(pair[0] + "").trim()] = unescape(pair.slice(1).join("="));
//   }
//   return cookies;
// }

function App() {
  // var myCookies = getCookies();
  // useEffect(() => {}, []);

  return (
    <div className="container">
      <h1>Gestion des adhérents</h1>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<Auth />}>
              <Route path="/" element={<User />} />

              <Route path="/create" element={<CreateUser />} />

              <Route path="/update/:id_user" element={<UpdateUser />} />

              <Route path="/supprimer/:id_user" element={<DeleteUser />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
