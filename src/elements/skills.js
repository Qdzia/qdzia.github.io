import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/progressbar";
import "../style/elements.css";

const skills = () => {
  return (
    <div class="bg-secondary element-container">
      <div class="d-flex ">
        <div class="mr-5 ml-3">
          <h3 class="text-left">Skills</h3>
          <hr class="hr-bold" />
        </div>
        <div>
          <div class="experience text-left mb-5">
            <p class="text-secondary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            </p>
            <h5 class="mr-4 ">C ++ </h5>
            <div class=" progress-custom mt-1 mb-4">
              <div class="progress">
                <div
                  class="progress-bar w-25 bg-primary"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <h5 class="mr-4 ">Java Script </h5>
            <div class=" progress-custom mt-1 mb-4">
              <div class="progress">
                <div
                  class="progress-bar w-25 bg-primary"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <h5 class="mr-4">TypeScript</h5>
            <div class=" progress-custom mt-1 mb-4 ">
              <div class="progress">
                <div
                  class="progress-bar w-25 bg-primary"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
};
export default skills;
