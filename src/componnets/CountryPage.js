import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryPage() {
  const param = useParams();

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${param.country}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return data ? (
    <>
      <section className="country-page-section container">
        <Link to={"/"}>
          <Button className="country-page-button-back shadow">
            <FontAwesomeIcon className="back-icon" icon={faArrowLeft} /> Back
          </Button>
        </Link>

        <section className="d-flex flex-wrap country-details-container">
          <section className="">
            <img
              alt={data.name.common}
              src={data.flags.svg}
              className="country-image"
            />
          </section>
          <section className="m-auto mt-4">
            <h2>{data.name.common}</h2>
            <section className=" d-flex flex-wrap country-details-section flex-row">
              <section className="me-4">
                <p>Native Name: {data.altSpellings[1]} </p>
                <p>Populaton: {data.population}</p>
                <p>Region: {data.region}</p>
                <p>Sub Region: {data.subregion}</p>
                <p>Capital: {data.capital}</p>
              </section>
              <section className="me-auto">
                <p>Top Level Domain: {data.tld[0]}</p>
                <p>
                  Currencies:
                  {Object.values(data.currencies)
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  Language:{" "}
                  {Object.values(data.languages)
                    .map((language) => language)
                    .join(", ")}
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  ) : null;
}

export default CountryPage;
