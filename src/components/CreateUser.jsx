import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post("http://localhost:3001/create", { name: nom, email })
      .then((res) => {
        console.log(res);
        navigate("/home");
      });
  };

  return (
    <div className="d-flex bg-primary justify-content-center justify-items-center p-3">
      <div className="w-50 bg-white rounded p-3">
        <h2>Modifier adhérent</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nom :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="nom"
              placeholder="nom"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email :{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="emails"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" className="btn btn-success" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
