import React from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import RegisterForm from "./Components/RegisterForm";
const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ offset: 3, span: 6 }}>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default App;
