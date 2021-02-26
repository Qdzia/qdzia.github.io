import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "react-bootstrap/Pagination";
import Tile from "../components/project_tile";

const projests = () => {
  return (
    <div class="bg-secondary element-container-pt">
      <div class="w-auto">
        <h3 class=" mb-4">Work </h3>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-xs-12 mb-4 ">
            <Tile />
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12 mb-4">
            <Tile />
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12 mb-4">
            <Tile />
          </div>
          <div class="col-lg-4 col-md-6 col-xs-12 mb-4">
            <Tile />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default projests;

{
  /* <div class="d-flex justify-content-center">
        <Pagination>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
        </Pagination>
      </div> */
}
