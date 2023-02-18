import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function CreateCard({ countries }) {
  function clicked() {
    console.log("clicked");
  }

  return countries ? (
    <Container className="d-flex justify-content-around flex-wrap">
      {countries.map((country, index) => {
        return (
          <div className="card-container" key={index} onClick={clicked}>
            <Card style={{ width: "18rem" }} className="shadow">
              <Card.Img
                variant="top"
                src={country.flags.svg}
                alt={country.flags.alt}
              />
              <Card.Body>
                <Card.Title>{country.name.common}</Card.Title>
                <Card.Text>
                  <span className="prop-card">Population: </span>
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
          </div>
        );
      })}
    </Container>
  ) : null;
}
export default CreateCard;
