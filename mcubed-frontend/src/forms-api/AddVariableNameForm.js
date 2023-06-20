import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


/** Form component to add a question to the API db
 *
 * ApiForms => AddProjectQuestion
 */
function AddVariableNameForm({ submit }) {
  console.debug("AddVariableNameForm");
  const initialState = { name: "", units: "" };
  const [formData, setFormData] = useState(initialState);
  const method = "post";

  async function handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      "action": "addprojectvariable",
      "name": formData["name"],
      "units": formData["units"]
    };
    await submit(data, method);
    setFormData(initialState);

  }

  function handleChange(evt) {
    console.log(evt);
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  return (
    <Container className="AddProjectQuestion">
      <Row>
        <Col>
          <h4>Add a variable name</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={3}></Col>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Variable Name:</Form.Label>
              <Form.Control
                type="text"
                value={formData["name"]}
                name="name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Units:</Form.Label>
              <Form.Control
                type="text"
                value={formData["units"]}
                name='units'
                onChange={handleChange}
              />
            </Form.Group>
            <Button style={styles["btn"]} className="submit" variant="primary" type='submit'>
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

export default AddVariableNameForm;