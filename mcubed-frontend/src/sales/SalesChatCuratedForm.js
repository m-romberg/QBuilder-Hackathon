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
      "action": "gptcuratedproject",
      "prompt": formData,
      "token": "default"
    };
    const result = await submit(data, method);
    console.log("result inside handle submit", result);
    if (result.result.includes("MISSING QUESTIONS")){ //TODO: replace with actual indicator
      setQuestions(result.result);
    }
    else if (result.result.includes("SOLUTION PROVIDED")){
      const data = {
        "action": "gptprojectmanager",
        "prompt": formData,
        "token": "default"
      };
      const result = await submit(data, method);
      console.log(result);
      setSolution(result.result); // #TODO: call to final endpoint for solution
      // setFormData("");
    }
    else{ setSolution(result.result);}
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
              <Form.Label>Please transcribe your sales call below. Include a summary of the call:</Form.Label>
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