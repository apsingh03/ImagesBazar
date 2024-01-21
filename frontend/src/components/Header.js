import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <Link to="/" className="logo">
            HomePage 1
          </Link>
        </div>

        <nav className="d-flex flex-row p-3">
          <div>
            <Link to="/homePage2">Page 2</Link>
          </div>

          <div>
            <Link to="/searchResult">Search Results</Link>
          </div>

          <div>
            {localStorage.getItem("userLogged") === null ? (
              <div>
                <Link to="/signupLogin">Signup & Login</Link>
              </div>
            ) : (
              <div>
                <Link
                  className="text-primary"
                  style={{ paddingRight: "10px" }}
                  title="User Name"
                >
                  {" "}
                  {JSON.parse(localStorage.getItem("userLogged")).email}{" "}
                </Link>
                <Link
                  className="text-white"
                  title="Downloaded History"
                  to="/downloadedImages"
                  style={{ paddingRight: "10px" }}
                >
                  {" "}
                  <FaHistory color="#fff" size={25} />{" "}
                </Link>
                <Link
                  className="text-white"
                  title="Favorites"
                  to="/favoriteImages"
                  style={{ paddingRight: "10px" }}
                >
                  {" "}
                  <MdFavorite color="#fff" size={25} />{" "}
                </Link>
                <Link
                  className="text-danger"
                  title="Logout"
                  onClick={() => [
                    localStorage.removeItem("userLogged"),
                    window.location.reload(),
                  ]}
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  <BiLogOut color="#fff" size={25} />{" "}
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
