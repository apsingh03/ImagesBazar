import React, { useEffect } from "react";
import { getImageByIdAsync } from "../redux/Slices/DataByIdSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

import { RotatingLines } from "react-loader-spinner";
import { saveAs } from "file-saver";
import { addImageFavoriteAsync } from "../redux/Slices/FavoritesSlice";
import { addImageHistoryAsync } from "../redux/Slices/HistorySlice";

const Popup = () => {
  const getImageIdFromUrl = document.location.href.split("/")[4];

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const getById = useSelector((state) => state.getDataBy);
  const favorites = useSelector((state) => state.favorites);
  const history = useSelector((state) => state.history);

  useEffect(() => {
    if (getImageIdFromUrl !== undefined) {
      dispatch(getImageByIdAsync({ id: getImageIdFromUrl }));
    }
  }, [navigation]);

  const closePopup = () => {
    document.getElementById("popupOverlay").style.display = "none";
  };

  const downloadHandler = (largeImageURL, imgId) => {
    saveAs(`${largeImageURL}`, "image.jpg");

    dispatch(
      addImageHistoryAsync({
        imageId: imgId,
        imageUrl: largeImageURL,
        userId: JSON.parse(localStorage.getItem("userLogged")).id,
      })
    );
  };

  return (
    <>
      <div className="overlay" id="popupOverlay" style={{ zIndex: 1 }}>
        <div className="popup">
          <div className="popupHeader d-flex flex-row justify-content-between">
            <div>
              {" "}
              <p>
                Preview ID : <b>{getImageIdFromUrl}</b>{" "}
              </p>{" "}
            </div>
            <div style={{ cursor: "pointer" }} onClick={() => closePopup()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#000000"
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
                />
              </svg>
            </div>
          </div>

          <div className="text-center mt-4">
            {history.isLoading ||
            favorites.isLoading ||
            getById.isLoading === true ? (
              <RotatingLines
                visible={true}
                height="50"
                width="50"
                color="blue"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : null}
          </div>

          {getById.data.hits &&
            getById.data.hits.map((data) => {
              // console.log("data" + data);
              return (
                <section key={data.id}>
                  <div className="row">
                    <div className="col-8  leftSide">
                      <div>
                        <img
                          // src="https://s3-alpha-sig.figma.com/img/7257/0dd8/f59889534d6eb86a2277cba040d53e12?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HogiLLpFqR5f~3hDfCRhpglhoAJNc7B8Qy1grIoSrmVeU2erYltutAhDg~NskE~RJmVagc854h~~w-qIQCtVND8cmmKX9xe84tGPpQbnBKMlPENDxJfZtLXGmpusoc6d-Nv7zeE51vWzokQb30LdFPsGJe54VVBAdsVgYCORxLr-VFt5ThwppjpBe8RDly40mZQ8ORWYTAbPO3eIUyCEDR0mbDWcG42W~WiCAdiKHSWV2nicq~zU4jpkaVJA0LsQMwdve9RkBlHylSzg~wRd2NO353hG4dddMRO2DiD5x6QzO0iGUy5U9S7cDq1PvW8R5hO3HX79cONSrxjbIjALRA__"
                          src={data.webformatURL}
                          alt="mountain"
                          className="rounded-3 mt-3"
                          style={{
                            width: "100%",
                            height: "450px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-4  rightSide">
                      <div className="d-flex flex-row justify-content-between">
                        <h1>Download</h1>

                        {localStorage.getItem("userLogged") === null ? (
                          <div>
                            <b>Login</b>
                          </div>
                        ) : (
                          <div>
                            <div
                              title="Add to Favorite"
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(
                                  addImageFavoriteAsync({
                                    imageId: data.id,
                                    imageUrl: data.largeImageURL,
                                    userId: JSON.parse(
                                      localStorage.getItem("userLogged")
                                    ).id,
                                  })
                                )
                              }
                            >
                              {" "}
                              <MdFavorite color="black" size={35} />{" "}
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <table
                          className="table table-hover"
                          style={{ border: "2px solid #DEE8F4" }}
                        >
                          {/* <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead> */}
                          <tbody>
                            <tr>
                              <td>Small</td>
                              <td> </td>
                              <td>
                                {" "}
                                <b>
                                  {" "}
                                  {data.previewWidth}&#xd7;{data.previewHeight}{" "}
                                </b>{" "}
                              </td>

                              <td>
                                {" "}
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  id="checkbox"
                                />{" "}
                              </td>
                            </tr>

                            <tr>
                              <td>Medium</td>
                              <td></td>
                              <td>
                                {" "}
                                <b>
                                  {" "}
                                  {data.webformatWidth}&#xd7;
                                  {data.webformatHeight}{" "}
                                </b>{" "}
                              </td>
                              <td>
                                {" "}
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  id="checkbox"
                                />{" "}
                              </td>
                            </tr>

                            <tr>
                              <td>Big</td>
                              <td></td>
                              <td>
                                {" "}
                                <b>
                                  {" "}
                                  {data.imageWidth}&#xd7;{data.imageHeight}{" "}
                                </b>{" "}
                              </td>

                              <td>
                                {" "}
                                <input
                                  type="checkbox"
                                  className="rounded-checkbox"
                                  id="checkbox"
                                />{" "}
                              </td>
                            </tr>
                            {/*     
                          <tr>
                            <td>Original</td>
                            <td></td>
                            <td>
                              {" "}
                              <b> 3850&#xd7;5640 </b>{" "}
                            </td>
                            <td>
                              {" "}
                              <input
                                type="checkbox"
                                className="rounded-checkbox"
                                id="checkbox"
                              />{" "}
                            </td>
                          </tr> */}
                          </tbody>
                        </table>

                        <button
                          style={{
                            fontWeight: "bold",
                            width: "100%",
                            backgroundColor: "#4BC34B",
                            border: "none",
                            color: "#fff",
                            padding: "10px 15px",
                          }}
                          onClick={() =>
                            downloadHandler(data.largeImageURL, data.id)
                          }
                        >
                          {" "}
                          Download For Free{" "}
                        </button>
                      </div>

                      <div>
                        <h1>Information</h1>
                      </div>

                      <div className="d-flex flex-row justify-content-between information">
                        <div>
                          <p className="title">User</p>
                          <h6 className="fw-bold description">{data.user}</h6>
                        </div>

                        <div>
                          <p className="title">User Id</p>
                          <h6 className="fw-bold description">
                            {data.user_id}
                          </h6>
                        </div>

                        <div>
                          <p className="title">Type</p>
                          <h6 className="fw-bold description">{data.type}</h6>
                        </div>
                      </div>

                      <div className="d-flex flex-row justify-content-between mt-3 information">
                        <div>
                          <p className="title">Likes</p>
                          <h6 className="fw-bold description">{data.likes}</h6>
                        </div>

                        <div>
                          <p className="title">Comments</p>
                          <h6 className="fw-bold description">
                            {data.comments}
                          </h6>
                        </div>

                        <div>
                          <p className="title">Views</p>
                          <h6 className="fw-bold description">{data.views}</h6>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="titles d-flex flex-row justify-content-start">
                    <div style={{ paddingRight: "15px" }}>
                      <b> Tags : </b>
                    </div>
                    {data.tags.split(",").map((tag, index) => {
                      return (
                        <div key={index}>
                          <p> {tag} </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* <div className="titles d-flex flex-row justify-content-start">
                  <div style={{ paddingRight: "15px" }}>
                    <b> Tags : </b>
                  </div>
    
                  <div>
                    <p> Weltraumbilder & bilder </p>
                  </div>
                  <div>
                    <p> Erde bilder & bilder </p>
                  </div>
                  <div>
                    <p> Naturbilder </p>
                  </div>
                </div> */}
                </section>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Popup;
