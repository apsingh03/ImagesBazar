import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OrIcon from "../components/svg/OrIcon";
import MagnifyingGlass from "../components/svg/MagnifyingGlass";
import Popup from "../components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { getImagesAsync } from "../redux/Slices/AddDataSlice";
import { RotatingLines } from "react-loader-spinner";

const SearchResult = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [imagesData, setimagesData] = useState([]);
  const [popUpCondition, setpopUpCondition] = useState(false);
  const [imageId, setimageId] = useState(0);

  const getDataFromRedux = useSelector((state) => state.getData);

  // console.log( "--> " + getDataFromRedux.isLoading + " " + getDataFromRedux.data.hits );
  // console.log( "--> "  + " " + imagesData );

  const getImageIdFromUrl =
    document.location.href.split("/")[4] !== undefined
      ? document.location.href.split("/")[4]
      : undefined;

  useEffect(() => {
    dispatch(getImagesAsync());

    console.log(" --> " + getImageIdFromUrl );

    if (getImageIdFromUrl !== undefined) {
      openPopup();
    }
  }, [navigation]);

  // const fetchData = () => {
  //   if (
  //     getDataFromRedux.isLoading !== true &&
  //     getDataFromRedux.data.hits !== undefined
  //   ) {
  //     // console.log(getData.data.data)
  //     setimagesData(getDataFromRedux.data);
  //   }
  // };

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
              <p>Page 2</p>
            </div>
            <div>
              <Link to="/searchResult">Search Results</Link>
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
              />

              <button type="submit" className="submit-button">
                Go!
              </button>
            </div>
          </div>

          <div className="resultTechnology mt-3">
            <p>Results: Technology</p>
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

      <section className="secondContainer d-flex flex-row justify-content-between">
        <div>
          {" "}
          <p>mountains</p>{" "}
        </div>
        <div>
          {" "}
          <p>computer</p>{" "}
        </div>
        <div>
          {" "}
          <p>programming</p>{" "}
        </div>
        <div>
          {" "}
          <p>wallpapers</p>{" "}
        </div>
        <div>
          {" "}
          <p>jobs</p>{" "}
        </div>
        <div>
          {" "}
          <p>Code</p>{" "}
        </div>
        <div>
          {" "}
          <p>finanzieren</p>{" "}
        </div>
        <div>
          {" "}
          <p>Marketing</p>{" "}
        </div>
      </section>
      {/* <button onClick={() => openPopup()}>Open Popup</button> */}

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
