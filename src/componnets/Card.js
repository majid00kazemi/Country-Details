import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

function CreateCard() {
  const [countries, setCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all/")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => console.log(error));
  }, []);

  function clicked() {
    console.log("clicked");
  }
  return countries ? (
    <section className="row main-section   m-auto w-100">
      <ul className="d-flex justify-content-evenly flex-wrap  col-lg-12 col-xxl-9 col-xl-11 col-md-12  m-auto">
        {countries.map((country, index) => {
          return (
            <li key={index} onClick={clicked}>
              <Card style={{ width: "15rem" }} className="shadow">
                <Card.Img
                  variant="top"
                  src={country.flags.svg}
                  alt={country.flags.alt}
                />
                <Card.Body>
                  <Card.Title>{country.name.common}</Card.Title>
                  <Card.Text>
                    <span className="prop-card">Population:</span>{" "}
                    {country.population}
                    <br />
                    <span className="prop-card">Region: </span>
                    {country.region}
                    <br />
                    <span className="prop-card">Capital: </span>
                    {country.capital}
                  </Card.Text>
                </Card.Body>
              </Card>
            </li>
          );
        })}
      </ul>
    </section>
  ) : null;
}
export default CreateCard;
