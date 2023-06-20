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
function SalesChatRawForm({ submit, showCurated, initialContext, setInitialContext }) {
  console.debug("SalesChatForm", submit, showCurated, initialContext, setInitialContext);
  const [formData, setFormData] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const method = "post";

  async function handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      "action": "gptrawproject",
      "prompt": formData,
      "token": "default"
    };
    const result = await submit(data, method);
    setFormData("");
    setIsSubmitted(true)
    setInitialContext(result);
  }

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  /** move onto the next form */
  function nextQuestion () {
    showCurated()

  }

  return (
    <Container className="SalesChatForm">
      <Row>
        <Col>
          <h4>SalesChat</h4>
          {!isSubmitted && <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Please input 1-3 sentences describing the client needs:</Form.Label>
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
          </Form>}
          {initialContext.length > 0 && <p>{initialContext}</p>}
          {isSubmitted && <Button style={styles["btn"]} variant="primary" onClick={nextQuestion}>
          Next Question
        </Button>}
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  btn: { margin: "1%" }
};


export default SalesChatRawForm;