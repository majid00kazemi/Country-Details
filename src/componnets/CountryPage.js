import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CountryPage() {
  const param = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${param.country}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400) {
          navigate("/404");
        } else setData(data[0]);
      })
      .catch((error) => {
        console.log(error);
        navigate("/404");
      });
  }, [param.country, navigate]);

  return data ? (
    <>
      <section className="country-page-section container">
        <Link to={"/"}>
          <Button className="country-page-button-back shadow">
            <FontAwesomeIcon className="back-icon" icon={faArrowLeft} /> Back
          </Button>
        </Link>

        <section className="d-flex flex-wrap country-details-container">
          <section className="m-auto">
            <img
              alt={data.name?.common}
              src={data.flags?.svg}
              className="country-image"
            />
          </section>
          <section className="m-auto mt-4">
            <h2>{data.name?.common}</h2>
            <section className=" d-flex flex-wrap country-details-section flex-row">
              <section className="me-4">
                {data.altSpellings?.[1] && (
                  <p>Native Name: {data.altSpellings[1]} </p>
                )}
                {data.population && <p>Populaton: {data.population}</p>}
                {data.region && <p>Region: {data.region}</p>}
                {data.subregion && <p>Sub Region: {data.subregion}</p>}
                {data.capital && <p>Capital: {data.capital}</p>}
              </section>
              <section className="me-auto">
                {data.tld?.[0] && <p>Top Level Domain: {data.tld[0]}</p>}
                {data.currencies && (
                  <p>
                    Currencies:
                    {Object.values(data.currencies)
                      .map((currency) => currency?.name)
                      .join(", ")}
                  </p>
                )}
                {data.languages && (
                  <p>
                    Language:{" "}
                    {Object.values(data.languages)
                      .map((language) => language)
                      .join(", ")}
                  </p>
                )}
              </section>
            </section>
            {data.borders && data.borders.length > 0 && (
              <section className="mt-4">
                Border Countries:
                {data.borders.map((border) => {
                  return (
                    <Link to={`/country/${border}`} key={border}>
                      <Button className="border-button shadow">{border}</Button>
                    </Link>
                  );
                })}
              </section>
            )}
          </section>
        </section>
      </section>
    </>
  ) : null;
}

export default CountryPage;
