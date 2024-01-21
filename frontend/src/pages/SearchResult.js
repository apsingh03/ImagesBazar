import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OrIcon from "../components/svg/OrIcon";
import MagnifyingGlass from "../components/svg/MagnifyingGlass";
import Popup from "../components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { getImagesAsync } from "../redux/Slices/AddDataSlice";
import { RotatingLines } from "react-loader-spinner";
import { BiLogOut } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const SearchResult = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [searchResult, setsearchResult] = useState("mountains");

  const getDataFromRedux = useSelector((state) => state.getData);

  // console.log( "--> " + getDataFromRedux.isLoading + " " + getDataFromRedux.data.hits );
  // console.log( "--> "  + " " + imagesData );

  const getImageIdFromUrl =
    document.location.href.split("/")[4] !== undefined
      ? document.location.href.split("/")[4]
      : undefined;

  useEffect(() => {
    dispatch(getImagesAsync({ queryText: searchResult }));

    if (getImageIdFromUrl !== undefined) {
      openPopup();
    }
  }, [navigation]);

  const openPopup = () => {
    document.getElementById("popupOverlay").style.display = "flex";
  };

  return (
    <>
      <section id="mainPage" style={{ height: "50vh" }}>
        <header className="header ">
          <div>
            <Link to="/" className="logo">
              HomePage
            </Link>
          </div>

          <nav className="d-flex flex-row">
            <div>
              {localStorage.getItem("userLogged") === null ? (
                <div>
                  <Link to="/signupLogin">Signup & Login</Link>
                </div>
              ) : (
                <div>
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

        <div className="d-flex flex-column align-items-center mt-5">
          <div className="searchBox">
            <div className="search-container">
              <div className="lens-icon">
                {" "}
                <MagnifyingGlass />{" "}
                <span className="orIcon">
                  <OrIcon />
                </span>{" "}
              </div>
              <input
                type="text"
                className="search-box"
                placeholder="Start New Search"
                onChange={(e) => setsearchResult(e.target.value)}
              />

              <button
                type="submit"
                className="submit-button"
                onClick={() =>
                  dispatch(getImagesAsync({ queryText: searchResult }))
                }
              >
                Go!
              </button>
            </div>
          </div>

          <div className="resultTechnology mt-3">
            <p>
              Results:{" "}
              {searchResult.charAt(0).toUpperCase() + searchResult.slice(1)}{" "}
            </p>
          </div>
        </div>
      </section>

      <div className="text-center">
        {getDataFromRedux.isLoading === true ? (
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : null}
      </div>

      <div className=" d-none d-lg-block ">
        <section className="secondContainer d-flex flex-row justify-content-between ">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => [
              dispatch(getImagesAsync({ queryText: "mountains" })),
              setsearchResult("monntains"),
            ]}
          >
            {" "}
            <p>Mountains</p>{" "}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => [
              dispatch(getImagesAsync({ queryText: "ocean" })),
              setsearchResult("ocean"),
            ]}
          >
            {" "}
            <p>Ocean</p>{" "}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => [
              dispatch(getImagesAsync({ queryText: "computer" })),
              setsearchResult("computer"),
            ]}
          >
            {" "}
            <p>Computer</p>{" "}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => [
              dispatch(getImagesAsync({ queryText: "programming" })),
              setsearchResult("programming"),
            ]}
          >
            {" "}
            <p>Programming</p>{" "}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => [
              dispatch(getImagesAsync({ queryText: "wallpapers" })),
              setsearchResult("wallpapers"),
            ]}
          >
            {" "}
            <p>Wallpapers</p>{" "}
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => [
              dispatch(getImagesAsync({ queryText: "jobs" })),
              setsearchResult("jobs"),
            ]}
          >
            {" "}
            <p>Jobs</p>{" "}
          </div>

          <div className=" w-25 float-start ">
            <select className="form-select" aria-label="Default select example">
              <option selected>Use Filters</option>
              <option value="1">
                Sort By <b>Name</b>{" "}
              </option>
              <option value="2">
                Sort By <b>Id</b>{" "}
              </option>
              <option value="3">
                Sort By <b>Ratings</b>{" "}
              </option>
            </select>
          </div>
        </section>
      </div>

      <section className="thirdContainer">
        <div className="row mb-3">
          {getDataFromRedux.data.hits &&
            getDataFromRedux.data.hits.map((data) => {
              // console.log("-> " ,  data)
              return (
                <div className="col-12 col-sm-6 col-lg-4 mb-2 " key={data.id}>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => openPopup()}
                  >
                    <Link to={`/searchResult/${data.id}/`}>
                      <img
                        // src="https://s3-alpha-sig.figma.com/img/8f66/a8a1/f630d6b81aac2fd29bb8843fff781d83?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-Bel7l2qm7lsrcHSPjBoKKBmDHtFMZ4FCLBhxhmxJLKYzAnrzWjlvXoHigkw1IQlbYzuPFPB7CbRaW4lxydEOPPd9LKNgQA0kxBp4aKqeVIOUUcfQXLgVKMyLTflFfppXMPeBWZmWzODR0mRv2mtg9~-0IlUK8wmpA9ev4LoaU37g027x9JKdTx2CIkXBI87TbkrHKmb8uvQMuPmppUMQIaI10R2-qHe0rIFV4rcmbCNNq8D2WT2iFrB2UUl50UPrOHi0xHnfD-u9RoQaOTvGEXU60CteD2LmA9pcQWrNJCM25TSTlsLZkesOSjgwzo850Z2BYAseKMCuUGI9SpKw__"
                        src={data.webformatURL}
                        alt="mountains"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>

                  <div className="titles d-flex flex-row justify-content-start">
                    {data.tags.split(",").map((tag, index) => {
                      return (
                        <div key={index}>
                          <p> {tag} </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      <div>
        <Popup />
      </div>
    </>
  );
};

export default SearchResult;
