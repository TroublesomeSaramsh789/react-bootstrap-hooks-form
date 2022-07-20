import React from "react";
import { Col, Form, Row, Container, Button } from "react-bootstrap";

const BootStrapForm = () => {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            required
            placeholder="Your Email"
            defaultValue=""
          />
          <Form.Control.Feedback>Valid Email</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Invalid Email
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            required
            placeholder="Your Password"
            defaultValue=""
          />
          <Form.Control.Feedback>Valid Password</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Invalid Password
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="my-4" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default BootStrapForm;
