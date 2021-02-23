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
  <Row>
    <Col>
    <Form.Label>Name</Form.Label>
      <Form.Control placeholder="First name" />
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Label>Subject</Form.Label>
      <Form.Control placeholder="Your Subject" />
    </Col>
    <Col>
    <Form.Label>Massage</Form.Label>
      <Form.Control as="textarea" rows={3} />

    </Col>
  </Row>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
    </div>
  );
};
export default contact;
