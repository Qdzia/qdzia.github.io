import "bootstrap/dist/css/bootstrap.min.css";
import "../style/elements.css";
import {Form, Row, Col, Button} from "react-bootstrap"

const contact = () => {
  return (
    <div class="bg-dark text-white element-container">
      <div class="w-auto">
        <h3 class="text-light mb-4">Contact </h3>
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
    
    <Button variant="primary" type="submit" >
    Submit
    </Button>
      
  </div>
  
</Form>
    </div>
  );
};
export default contact;
