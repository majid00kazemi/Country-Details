// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CountryPage() {
  return (
    <>
      <section className="country-page-section container">
        <Button className="country-page-button-back shadow">
          <FontAwesomeIcon className="back-icon" icon={faArrowLeft} /> Back
        </Button>

        <section className="d-flex flex-wrap country-details-container">
          <section className="">
            <img
              alt="Belguim"
              src="https://flagcdn.com/be.svg"
              className="country-image"
            />
          </section>
          <section className="m-auto">
            <h2>Belguim</h2>
            <section className=" d-flex flex-wrap country-details-section flex-row">
              <section className="">
                <p>Native Name: Belgie </p>
                <p>Populaton: 111.324234.1234</p>
                <p>Region: Europe</p>
                <p>Sub Region: Western Europe</p>
                <p>Capital: Brussels</p>
              </section>
              <section className="me-auto">
                <p>Top Level Domain: .be</p>
                <p>Currencies: Euro</p>
                <p>Language: Dutch, French, German</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default CountryPage;
