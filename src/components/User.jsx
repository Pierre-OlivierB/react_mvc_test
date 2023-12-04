import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";

function User() {
  const [admin, setAdmin] = useOutletContext();
  const [user, setUser] = useState([]);

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/select")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const navigate = useNavigate();
  const handleClick = (ev) => {
    ev.preventDefault();
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data.Status === "Ok") {
          window.location.reload(true);
        } else {
          alert("Erreur");
        }
      })
      .catch((err) => console.log(err));
    // document.cookie =
    //   "tokenco=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // navigate("/login");
  };
  return (
    <div className="d-flex vh-90 bg-primary justify-content-center justify-items-center p-5">
      <h2>Welcome back {admin ? "Commander" : "Follower"}</h2>
      <div className="w-75 bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/login" className="btn btn-success">
            New User
          </Link>{" "}
          <button className="btn btn-danger" onClick={handleClick}>
            Déconnexion
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((us, i) => (
              <tr key={i}>
                <td>{us.name}</td>
                <td>{us.email}</td>
                <td>
                  <Link
                    to={{
                      pathname: `update/${us.id_user}`,
                    }}
                    className="btn btn-primary"
                    state={{ name: us.name, mail: us.email }}
                  >
                    Modifier
                  </Link>
                </td>
                <td>
                  <Link
                    to={{
                      pathname: `supprimer/${us.id_user}`,
                    }}
                    state={{ name: us.name, mail: us.email }}
                    className="btn btn-danger"
                  >
                    Supprimer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
