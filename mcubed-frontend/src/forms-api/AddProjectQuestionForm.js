import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


/** Form component to add a question to the API db
 *
 * ApiForms => AddProjectQuestion
 */
function AddProjectQuestionForm({ submit }) {
  console.debug("AddProjectQuestion");
  const [formData, setFormData] = useState("");
  const method = "post";

  async function handleSubmit(evt) {
    evt.preventDefault();
    const data = { "action": "addprojectquestion", "text": formData };
    await submit(data, method);
    setFormData("");
  }

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  return (
    <Container className="AddProjectQuestion">

      <Row>
        <Col>
          <h4>Add a project question</h4>
        </Col>
      </Row>
      <Row>
      <Col xs={3}></Col>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Question:</Form.Label>
              <Form.Control type="text"
                value={formData}
                onChange={handleChange}
              />
            </Form.Group>
            <Button style={styles["btn"]} variant="primary" type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={3}></Col>
      </Row>
    </Container>
  );
}

const styles = {
  btn: { margin: "1%" }
};


export default AddProjectQuestionForm;