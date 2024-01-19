import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header />

      <div style={{ padding: "0px 53px" }}>
        <div className="p-5" style={{ backgroundColor: "#E9ECEF" }}>
          <div>
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              Welcome to Restaurant Management, your go-to platform for
              efficiently managing and exploring a curated list of restaurants.
              Whether you're a food enthusiast or a restaurant owner, our
              application provides a seamless experience to discover, add,
              update, and explore various restaurants with ease.
            </p>
          </div>

          <div
            className="py-2"
            style={{ borderTop: "1px solid #ddd", width: "100%" }}
          ></div>

          <div>
            <h2 className="">Our Mission</h2>
            <p className="lead">
              {" "}
              At Restaurant Management, our mission is to simplify the process
              of restaurant management and enhance the dining experience for
              both customers and restaurant owners. We strive to provide a
              user-friendly platform that brings together food lovers and
              establishments in a harmonious digital environment.
            </p>
          </div>
        </div>

        <div className="p-3">
          <h5>Contact Us</h5>
          <p>
            If you have any questions, suggestions, or feedback, feel free to
            reach out to us:
          </p>

          <ul>
            <li>Email: info@restaurantmanagement.com</li>
            <li>Phone: (123) 456-7890</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
