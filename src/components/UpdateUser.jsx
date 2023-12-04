import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  axios.defaults.withCredentials = true;
  const location = useLocation();
  const userName = location.state.name;
  const userMail = location.state.mail;
  const [nom, setNom] = useState(userName);
  const [email, setEmail] = useState(userMail);
  const { id_user } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .put("http://localhost:3001/update/" + id_user, { name: nom, email })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };

  return (
    <div className="d-flex bg-primary justify-content-center justify-items-center p-3">
      <div className="w-50 bg-white rounded p-3">
        <h2>Modifier adhérent</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nom :
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              placeholder="nom"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email :
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <button className="btn btn-success">Modifier</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
