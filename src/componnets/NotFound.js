import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-container">
      <h2>Not was found go back...</h2>
      <Link to={"/"}>
        <Button className="shadow not-found-button mt-4">Go Home</Button>
      </Link>
    </section>
  );
}

export default NotFound;
