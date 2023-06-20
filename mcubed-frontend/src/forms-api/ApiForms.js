import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AddProjectQuestionForm from "./AddProjectQuestionForm";
import AddVariableNameForm from './AddVariableNameForm';
import AddCostForm from './AddCostForm';

/**
 * Controll component for ApiForm
 *
 * App => ApiForms => {AddProjectQuestion}
 */
function ApiForms({ submit }) {
  console.debug("ApiForms");

  return (
    <Container className="ApiForms">
      <Row>
        <Col>
          <AddProjectQuestionForm submit={submit} />
          <AddVariableNameForm submit={submit} />
          <AddCostForm submit={submit} />
        </Col>
      </Row>
    </Container>
  );
}

export default ApiForms;