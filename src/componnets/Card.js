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
      <section className="d-flex justify-content-evenly flex-wrap col-md-12">
        {countries.map((country) => {
          return (
            <Card style={{ width: "18rem", marginBottom: "34px" }}>
              {console.log(country)}
              <Card.Img variant="top" src={country.flags.svg} />
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
          );
        })}
      </section>
    </section>
  ) : null;
  // <Card style={{ width: "18rem" }}>
  //   <Card.Img variant="top" src="holder.js/100px180" />
  //   <Card.Body>
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the
  //       bulk of the card's content.
  //     </Card.Text>
  //     <Button variant="primary">Go somewhere</Button>
  //   </Card.Body>
  // </Card>
}
export default CreateCard;
