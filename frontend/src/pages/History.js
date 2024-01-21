import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { saveAs } from "file-saver";
import { FaShareAlt } from "react-icons/fa";

import {
  deleteHistoryAsync,
  getImagesHistoryAsync,
} from "../redux/Slices/HistorySlice";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ShareButton from "../components/ShareButton";

const History = () => {
  const dispatch = useDispatch();

  const historyList = useSelector((state) => state.history);
  const shareLinkRef = useRef(null);
  const [shareLink, setshareLink] = useState("");
  // console.log( "historyList - " , historyList );

  const copyToClipboard = () => {
    if (shareLinkRef.current) {
      navigator.clipboard
        .writeText(shareLinkRef.current.value)
        .then(() => {
          console.log("Link copied to clipboard");
        })
        .catch((err) => {
          console.error("Unable to copy link to clipboard", err);
        });
    }
  };

  useEffect(() => {
    dispatch(getImagesHistoryAsync());
  }, []);

  return (
    <>
      <section id="mainPage" style={{ height: "120vh" }}>
        <Header />

        <div className="text-center">
          {historyList.isLoading === true ? (
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

        <div className="mt-5">
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Image Id</th>
                  <th scope="col">Images</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {historyList.data.data &&
                  historyList.data.data.map((data, index) => {
                    return (
                      <tr key={data.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{data.imageId}</td>
                        <td>
                          <img
                            src={data.imageUrl}
                            title="Image"
                            alt="mountains"
                            width={100}
                            height={100}
                            style={{ objectFit: "contain" }}
                          />{" "}
                        </td>
                        <td>
                          <div
                            className="d-flex flex-row  "
                            id="downloadImagesActions"
                          >
                            <div>
                              <Link
                                to={`/searchResult/${data.imageId}`}
                                className="btn btn-primary btn-md"
                                title="View it"
                              >
                                View
                              </Link>
                            </div>

                            <div>
                              <button
                                className="btn btn-success btn-md"
                                title="Download Again"
                                onClick={() =>
                                  saveAs(`${data.largeImageURL}`, "image.jpg")
                                }
                              >
                                Download Again
                              </button>
                            </div>

                            <div title="Share It" style={{ cursor: "pointer" }}>
                              <ShareButton
                                key={index}
                                links={`http://localhost:3000/searchResult/${data.imageId}`}
                                index={index}
                              />
                            </div>

                            {/* <div title="Share It" onClick={ () => copyToClipboard() }  style={{cursor: "pointer"}} >
                              <input type="hidden"   value={`http://localhost:3000/searchResult/${data.imageId}`}  ref={shareLinkRef} onChange={ (e) => setshareLink(e.target.value) } readOnly  />
                            <FaShareAlt color="black" size={25} />
                            </div> */}

                            <div>
                              <button
                                className="btn btn-danger btn-md"
                                title="Delete it"
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure want to Delete this Product? "
                                    )
                                  ) {
                                    dispatch(
                                      deleteHistoryAsync({
                                        userId: data.userId_id,
                                        imageId: data.imageId,
                                      })
                                    );
                                  }
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
