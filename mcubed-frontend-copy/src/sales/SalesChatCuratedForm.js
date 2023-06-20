import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

/**
 *
 * Form for sales rep to type in chat
 *
 * SalesChat => SalesChatForm
 */
function SalesChatCuratedForm({ submit, setSolution, setQuestions, setIsLoading }) {
  console.debug("SalesChatForm");
  const [formData, setFormData] = useState("");
  const method = "post";

  async function handleSubmit(evt) {
    evt.preventDefault();
      const data = {
        "action": "gptcostestimator",
        "prompt": formData,
        "token": "default"
      };
      const result = await submit(data, method);
      setSolution(result.result); // #TODO: call to final endpoint for solution
      // setFormData("");
  }

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  return (
    <Container className="SalesChatForm">
      <Row>
        <Col>
          <h4>SalesChat</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Please add cost details.</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={formData}
                onChange={handleChange}
              />
            </Form.Group>
            <Button style={styles["btn"]} variant="primary" type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  btn: { margin: "1%" }
};


export default SalesChatCuratedForm;