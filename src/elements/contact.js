import "bootstrap/dist/css/bootstrap.min.css";
import "../style/elements.css";
import { Form } from "react-bootstrap";

const contact = () => {
  return (
    <div class="bg-secondary element-container">
      <div class="w-auto">
        <h3 class=" mb-4">Contact </h3>
      </div>

      <Form>
        <div class="form-box d-inline-block">
          <div class=" mb-1">
            <Form.Control placeholder="Name" />
          </div>
          <div class=" mb-1">
            <Form.Control type="email" placeholder="Email" />
          </div>
          <div class=" mb-1 mb-1">
            <Form.Control as="textarea" placeholder="Massage" rows={3} />
          </div>

          <button class="btn btn-submit" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};
export default contact;
