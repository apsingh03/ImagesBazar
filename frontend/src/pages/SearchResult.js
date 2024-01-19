import React from "react";
import { Link } from "react-router-dom";
import OrIcon from "../components/svg/OrIcon";
import MagnifyingGlass from "../components/svg/MagnifyingGlass";
import Popup from "../components/Popup";

const SearchResult = () => {
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

      <section className="secondContainer d-flex flex-row justify-content-between">
        <div>
          {" "}
          <p>Digital</p>{" "}
        </div>
        <div>
          {" "}
          <p>Computer</p>{" "}
        </div>
        <div>
          {" "}
          <p>Codierung</p>{" "}
        </div>
        <div>
          {" "}
          <p>Tech</p>{" "}
        </div>
        <div>
          {" "}
          <p>Netz</p>{" "}
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

      <section className="thirdContainer">
        <div className="row mb-3">
          <div className="col-12 col-sm-6 col-lg-4 mb-2 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/8f66/a8a1/f630d6b81aac2fd29bb8843fff781d83?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-Bel7l2qm7lsrcHSPjBoKKBmDHtFMZ4FCLBhxhmxJLKYzAnrzWjlvXoHigkw1IQlbYzuPFPB7CbRaW4lxydEOPPd9LKNgQA0kxBp4aKqeVIOUUcfQXLgVKMyLTflFfppXMPeBWZmWzODR0mRv2mtg9~-0IlUK8wmpA9ev4LoaU37g027x9JKdTx2CIkXBI87TbkrHKmb8uvQMuPmppUMQIaI10R2-qHe0rIFV4rcmbCNNq8D2WT2iFrB2UUl50UPrOHi0xHnfD-u9RoQaOTvGEXU60CteD2LmA9pcQWrNJCM25TSTlsLZkesOSjgwzo850Z2BYAseKMCuUGI9SpKw__"
              alt="mountains"
              style={{ width: "100%", height: "auto" }}
            />

            <div className="titles d-flex flex-row justify-content-start">
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
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mb-2 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/ca20/6b5c/f3eeadaada251f11e1f4cc96a1918d0b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZInYYRnjduYElgEx3itLmQtQHFUNlbXpjwVL~qwHqCnsZPtdaS0ahkNq~ctaOfk4RDbwQVb0jJSYV~bMKyR20t3tjp4FK7H3zqED8HVU~ZnB3gC-QuP1VG1ATRfVJKgFIJwNU43uflwfKMlfSU14oO~PUNRm-PWLTD4IJsDYiHdy5WWTA-GwCODzLQ1ft8~EhcTBPQGi-~HDuiT1duWCaxS7o5~c5yQhjHCN4RQX7i3YkIQEVcY8dSVNYGvobfV22GCx828YACs6SPmMcW~SP~ej2dvDncCY-xQBFlMU~fsw1p4cU4LAm~lRNU7nHPcT9~Rhw2mr6ZGNNjZctmIVWg__"
              alt="mountains"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="titles d-flex flex-row justify-content-start">
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
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mb-2 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/7257/0dd8/f59889534d6eb86a2277cba040d53e12?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HogiLLpFqR5f~3hDfCRhpglhoAJNc7B8Qy1grIoSrmVeU2erYltutAhDg~NskE~RJmVagc854h~~w-qIQCtVND8cmmKX9xe84tGPpQbnBKMlPENDxJfZtLXGmpusoc6d-Nv7zeE51vWzokQb30LdFPsGJe54VVBAdsVgYCORxLr-VFt5ThwppjpBe8RDly40mZQ8ORWYTAbPO3eIUyCEDR0mbDWcG42W~WiCAdiKHSWV2nicq~zU4jpkaVJA0LsQMwdve9RkBlHylSzg~wRd2NO353hG4dddMRO2DiD5x6QzO0iGUy5U9S7cDq1PvW8R5hO3HX79cONSrxjbIjALRA__"
              alt="mountains"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="titles d-flex flex-row justify-content-start">
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
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-lg-4 mb-2 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/8f66/a8a1/f630d6b81aac2fd29bb8843fff781d83?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-Bel7l2qm7lsrcHSPjBoKKBmDHtFMZ4FCLBhxhmxJLKYzAnrzWjlvXoHigkw1IQlbYzuPFPB7CbRaW4lxydEOPPd9LKNgQA0kxBp4aKqeVIOUUcfQXLgVKMyLTflFfppXMPeBWZmWzODR0mRv2mtg9~-0IlUK8wmpA9ev4LoaU37g027x9JKdTx2CIkXBI87TbkrHKmb8uvQMuPmppUMQIaI10R2-qHe0rIFV4rcmbCNNq8D2WT2iFrB2UUl50UPrOHi0xHnfD-u9RoQaOTvGEXU60CteD2LmA9pcQWrNJCM25TSTlsLZkesOSjgwzo850Z2BYAseKMCuUGI9SpKw__"
              alt="mountains"
              style={{ width: "100%", height: "auto" }}
            />

            <div className="titles d-flex flex-row justify-content-start">
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
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mb-2 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/ca20/6b5c/f3eeadaada251f11e1f4cc96a1918d0b?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZInYYRnjduYElgEx3itLmQtQHFUNlbXpjwVL~qwHqCnsZPtdaS0ahkNq~ctaOfk4RDbwQVb0jJSYV~bMKyR20t3tjp4FK7H3zqED8HVU~ZnB3gC-QuP1VG1ATRfVJKgFIJwNU43uflwfKMlfSU14oO~PUNRm-PWLTD4IJsDYiHdy5WWTA-GwCODzLQ1ft8~EhcTBPQGi-~HDuiT1duWCaxS7o5~c5yQhjHCN4RQX7i3YkIQEVcY8dSVNYGvobfV22GCx828YACs6SPmMcW~SP~ej2dvDncCY-xQBFlMU~fsw1p4cU4LAm~lRNU7nHPcT9~Rhw2mr6ZGNNjZctmIVWg__"
              alt="mountains"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="titles d-flex flex-row justify-content-start">
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
          </div>

          <div className="col-12 col-sm-6 col-lg-4 mb-2 ">
            <img
              src="https://s3-alpha-sig.figma.com/img/7257/0dd8/f59889534d6eb86a2277cba040d53e12?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HogiLLpFqR5f~3hDfCRhpglhoAJNc7B8Qy1grIoSrmVeU2erYltutAhDg~NskE~RJmVagc854h~~w-qIQCtVND8cmmKX9xe84tGPpQbnBKMlPENDxJfZtLXGmpusoc6d-Nv7zeE51vWzokQb30LdFPsGJe54VVBAdsVgYCORxLr-VFt5ThwppjpBe8RDly40mZQ8ORWYTAbPO3eIUyCEDR0mbDWcG42W~WiCAdiKHSWV2nicq~zU4jpkaVJA0LsQMwdve9RkBlHylSzg~wRd2NO353hG4dddMRO2DiD5x6QzO0iGUy5U9S7cDq1PvW8R5hO3HX79cONSrxjbIjALRA__"
              alt="mountains"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="titles d-flex flex-row justify-content-start">
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
          </div>
        </div>
      </section>

      <div>
        <button onClick={() => openPopup()}>Open Popup</button>

        <Popup />
      </div>
    </>
  );
};

export default SearchResult;
