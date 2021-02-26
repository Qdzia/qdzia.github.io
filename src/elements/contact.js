import "bootstrap/dist/css/bootstrap.min.css";
import "../style/elements.css";
import { Form } from "react-bootstrap";

const contact = () => {
  return (
    <div class="bg-secondary element-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg>
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
