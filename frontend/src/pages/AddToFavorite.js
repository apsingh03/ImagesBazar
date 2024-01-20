import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  deleteImageAsync,
  getImagesFavoritesAsync,
} from "../redux/Slices/FavoritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const AddToFavorite = () => {
  const dispatch = useDispatch();

  const favoritesList = useSelector((state) => state.favorites);

  // console.log( "favoritesList - " , favoritesList );

  useEffect(() => {
    dispatch(getImagesFavoritesAsync());
  }, []);

  return (
    <>
      <section id="mainPage" style={{ height: "120vh" }}>
        <Header />

        <div className="text-center">
          {favoritesList.isLoading === true ? (
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
                {favoritesList.data.data &&
                  favoritesList.data.data.map((data, index) => {
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
                              className="btn btn-danger btn-md"
                              title="Delete it"
                              onClick={() =>
                                dispatch(
                                  deleteImageAsync({
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

export default AddToFavorite;
