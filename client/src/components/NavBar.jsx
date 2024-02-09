import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { isAuthenticated, signOut, user } = useAuth();

  const navigate = useNavigate();

  const handleClick = () => {
    signOut();
    navigate("/login");
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bolder  ">
            <img
              src={logo}
              style={{ maxHeight: "40px", maxWidth: "40px" }}
              alt="..."
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tasks" className="nav-link" aria-current="page">
                  Tasks
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add-task" className="nav-link" aria-current="page">
                  Create Tasks
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              {isAuthenticated ? (
                <>
                  <div className="d-flex align-items-center me-2 fw-bolder text-secondary   ">
                    Welcome {user.userName}
                  </div>

                  <div className="btn btn-outline-dark d-flex align-items-center  ">
                    <Link to="/add-task" className="nav-link ">
                      Add Task
                    </Link>
                  </div>

                  <button
                    onClick={handleClick}
                    className="btn btn-outline-dark d-flex align-items-center ms-2 "
                  >
                    <div>Sign out</div>
                  </button>
                </>
              ) : (
                <>
                  <div className="btn btn-outline-dark d-flex align-items-center  ">
                    <Link to="/register" className="nav-link ">
                      Register
                    </Link>
                  </div>

                  <div className="btn btn-outline-dark d-flex align-items-center ms-2 ">
                    <Link to="/login" className="nav-link   ">
                      Login
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
