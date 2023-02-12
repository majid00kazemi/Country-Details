import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";

function CreateCard({ list }) {
  const [countries, setCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all/")
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return countries ? (
    <section className="row container m-auto">
      <ul className="d-flex justify-content-evenly flex-wrap col-md-12">
        {countries.map((country, index) => {
          return (
            <li key={index}>
              <Card style={{ width: "20rem", marginBottom: "34px" }}>
                <Card.Img
                  variant="top"
                  src={country.flags.svg}
                  alt={country.flags.alt}
                />
                <Card.Body>
                  <Card.Title>{country.name.common}</Card.Title>
                  <Card.Text>
                    Population: {country.population}
                    <br />
                    Region: {country.region}
                    <br />
                    Capital: {country.capital}
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
