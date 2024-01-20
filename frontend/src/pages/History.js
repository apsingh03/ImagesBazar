import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { saveAs } from "file-saver";

import {
  deleteHistoryAsync,
  getImagesHistoryAsync,
} from "../redux/Slices/HistorySlice";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const History = () => {
  const dispatch = useDispatch();

  const historyList = useSelector((state) => state.history);

  // console.log( "historyList - " , historyList );

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
                            alt="mountains"
                            width={100}
                            height={100}
                            style={{ objectFit: "contain" }}
                          />{" "}
                        </td>
                        <td>
                          <div className="d-flex flex-row justify-content-around ">
                            <Link
                              to={`/searchResult/${data.imageId}`}
                              className="btn btn-primary btn-md"
                              title="View it"
                            >
                              View
                            </Link>
                            <button
                              className="btn btn-success btn-md"
                              title="View it"
                              onClick={() =>
                                saveAs(`${data.largeImageURL}`, "image.jpg")
                              }
                            >
                              Download Again
                            </button>
                            <button
                              className="btn btn-danger btn-md"
                              title="Delete it"
                              onClick={() =>
                                dispatch(
                                  deleteHistoryAsync({
                                    userId: data.userId_id,
                                    imageId: data.imageId,
                                  })
                                )
                              }
                            >
                              Delete
                            </button>
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
