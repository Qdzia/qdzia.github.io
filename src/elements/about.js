import "bootstrap/dist/css/bootstrap.min.css";
import photo from "../images/portrait.jpg";
import "../style/elements.css";
import Button from "react-bootstrap/Button";

const about = () => {
  return (
    <div class="bg-dark text-white d-flex element-container">
      <img src={photo} alt="Portrait" class="portrait" />
      <div>
        <h3 class="text-left">About Me</h3>
        <p class="text-left">
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat." "At vero eos et accusamus et iusto od
        </p>
        <div class="d-flex ">
          <div>
            <h3 class="text-left">Contact</h3>
            <p class="text-left">
              Jonathan Doe
              <br />
              1600 Amphitheatre Parkway
              <br />
              Mountain View, CA 94043 US
              <br />
              (123)456-7890
              <br />
              anyone@website.com
              <br />
            </p>
          </div>
          <div class="btn-cv">
            <Button variant="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              <span class="btn-text"> Download CV</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
