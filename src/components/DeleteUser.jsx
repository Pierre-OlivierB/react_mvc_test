import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

function DeleteUser() {
  axios.defaults.withCredentials = true;
  const location = useLocation();
  const userName = location.state.name;
  const userMail = location.state.mail;

  const { id_user } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(id_user);
    axios.delete("http://localhost:3001/delete/" + id_user).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="d-flex bg-primary justify-content-center justify-items-center p-3">
      <div className="w-50 bg-white rounded p-3">
        <h2>Supprimer adhérent</h2>
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
              value={userName}
              readOnly
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
              value={userMail}
              readOnly
            />
          </div>
          <button className="btn btn-danger">Supprimer</button>
        </form>
      </div>
    </div>
  );
}

export default DeleteUser;
