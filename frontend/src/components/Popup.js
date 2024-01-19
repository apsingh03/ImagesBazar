import React from "react";

const Popup = () => {
  const closePopup = () => {
    document.getElementById("popupOverlay").style.display = "none";
  };

  return (
    <>
      <div class="overlay" id="popupOverlay" style={{ zIndex: 1 }}>
        <div class="popup">
          <div className="popupHeader d-flex flex-row justify-content-between">
            <div>
              {" "}
              <p>
                Preview ID : <b>48777</b>{" "}
              </p>{" "}
            </div>
            <div onClick={() => closePopup()}>
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

          <section>
            <div className="row">
              <div className="col-8  leftSide">
                <div>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/7257/0dd8/f59889534d6eb86a2277cba040d53e12?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HogiLLpFqR5f~3hDfCRhpglhoAJNc7B8Qy1grIoSrmVeU2erYltutAhDg~NskE~RJmVagc854h~~w-qIQCtVND8cmmKX9xe84tGPpQbnBKMlPENDxJfZtLXGmpusoc6d-Nv7zeE51vWzokQb30LdFPsGJe54VVBAdsVgYCORxLr-VFt5ThwppjpBe8RDly40mZQ8ORWYTAbPO3eIUyCEDR0mbDWcG42W~WiCAdiKHSWV2nicq~zU4jpkaVJA0LsQMwdve9RkBlHylSzg~wRd2NO353hG4dddMRO2DiD5x6QzO0iGUy5U9S7cDq1PvW8R5hO3HX79cONSrxjbIjALRA__"
                    alt="mountain"
                    className="rounded-3 mt-3"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="col-4  rightSide">
                <div>
                  <h1>Download</h1>
                </div>

                <div>
                  <table
                    class="table table-hover"
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
                          <b> 640&#xd7;960 </b>{" "}
                        </td>

                        <td>
                          {" "}
                          <input
                            type="checkbox"
                            class="rounded-checkbox"
                            id="checkbox"
                          />{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>Medium</td>
                        <td></td>
                        <td>
                          {" "}
                          <b> 1920&#xd7;2660 </b>{" "}
                        </td>
                        <td>
                          {" "}
                          <input
                            type="checkbox"
                            class="rounded-checkbox"
                            id="checkbox"
                          />{" "}
                        </td>
                      </tr>

                      <tr>
                        <td>Big</td>
                        <td></td>
                        <td>
                          {" "}
                          <b> 640&#xd7;960 </b>{" "}
                        </td>

                        <td>
                          {" "}
                          <input
                            type="checkbox"
                            class="rounded-checkbox"
                            id="checkbox"
                          />{" "}
                        </td>
                      </tr>

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
                            class="rounded-checkbox"
                            id="checkbox"
                          />{" "}
                        </td>
                      </tr>
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
                    <h6 className="fw-bold description">Josch13</h6>
                  </div>

                  <div>
                    <p className="title">User Id</p>
                    <h6 className="fw-bold description">48777</h6>
                  </div>

                  <div>
                    <p className="title">Type</p>
                    <h6 className="fw-bold description">Photo</h6>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-between mt-3 information">
                  <div>
                    <p className="title">User</p>
                    <h6 className="fw-bold description">Josch13</h6>
                  </div>

                  <div>
                    <p className="title">User Id</p>
                    <h6 className="fw-bold description">48777</h6>
                  </div>

                  <div>
                    <p className="title">Type</p>
                    <h6 className="fw-bold description">Photo</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="titles d-flex flex-row justify-content-start">
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Popup;
