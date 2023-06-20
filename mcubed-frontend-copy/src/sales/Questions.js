import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Questions
 *
 * Takes in an array of questions to display
 * @param {*} param0
 */
function Questions({questions}) {
  console.debug("inside Questions");
  return (
  <Container className="Questions">
    <Row>
      <Col>
      <h4>Missing Questions</h4>
      {questions}
      </Col>
    </Row>
  </Container>)
  ;

}

export default Questions;