import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";

const projests = () => {
  return (
    <div class="bg-dark text-dark element-container">
      <div class="w-auto">
        <h3 class="text-light mb-4">Work </h3>
      </div>

      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Monopoly the game</h4>
          <h6 class="card-subtitle mb-2 text-muted">
            Group • March 2010 - Present | React • JSX • Redux • ASP .NET
          </h6>

          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.orum et dolorum fuga. Et harum quidem
            rerum facilis est et expedita distinctio. Nam libero tempore, cum
            soluta nobis est eligendi optio cumque nihil impedit quo minus id
            quod maxime placeat facere possimus, omnis voluptas assumenda est,
            omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
            debitis aut rerum
          </p>
          <a href="#" class="card-link">
            Github
          </a>
        </div>
      </div>
      <p>
        <br />
      </p>
      <div class="d-flex justify-content-center">
        <Pagination>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};
export default projests;
