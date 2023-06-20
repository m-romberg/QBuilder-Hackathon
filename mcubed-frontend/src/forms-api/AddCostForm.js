import React from 'react';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Alert from '../common/Alert';

/** Form component to add a question to the API db
 *
 * ApiForms => AddCostForm
 */
function AddCostForm({ submit }) {
  const intialState = [{
    "name": "",
    "cost": 0,
    "quantity": 0,
    "stock": 0,
    "time": 0
  }];
  console.debug("AddCostForm");
  const [formData, setFormData] = useState(intialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.debug("formData", formData);
  const method = "post";

  /**submit to api */
  async function handleSubmit(evt) {
    console.debug("AddCostForm handleSubmit");
    submittedSuccess()
    evt.preventDefault();
    const data = {
      "action": "addcosts",
      "costbasis": formData,
    };
    console.log("data=", data);
    await submit(data, method);
    console.log("after submit");
    setFormData(intialState);
  }

  /**controlled form */
  function handleChange(evt, indx) {
    console.debug("handleChange");
    console.log(evt);
    const fieldName = evt.target.name;
    const value = fieldName === "name" ? evt.target.value : +evt.target.value;

    setFormData(currData => {
      currData[indx][fieldName] = value;
      return [...currData];
    });
  }

  /**add a duplicate form field */
  function addFormFields() {
    setFormData([...formData, ...intialState]);
  }

  /**remove a duplicate form field */
  function removeFormFields(i) {
    let newFormValues = [...formData];
    newFormValues.splice(i, 1);
    setFormData(newFormValues);
  }

  /**alert for submission */
  function submittedSuccess() {
    setIsSubmitted(true);

    const timer = setTimeout(() => {
      setIsSubmitted(false);
    }, 2000)
    return () => clearTimeout(timer)
  }

  return (
    <Container className="AddProjectQuestion">
      <Row>
        <Col>
          <h4>Add a cost basis</h4>
        </Col>
      </Row>
      {isSubmitted && <Row><Col><Alert messages={["Submitted"]}/></Col></Row> }
      <Row>
      <Col xs={3}></Col>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
            {formData.map((element, indx) =>
              <div key={indx}>
                <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData[indx]["name"]}
                    name="name"
                    onChange={e => handleChange(e, indx)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Cost:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData[indx]["cost"]}
                    name='cost'
                    onChange={e => handleChange(e, indx)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Quantity:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData[indx]["quantity"]}
                    name='quantity'
                    onChange={e => handleChange(e, indx)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Stock:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData[indx]["stock"]}
                    name='stock'
                    onChange={e => handleChange(e, indx)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Time:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData[indx]["time"]}
                    name='time'
                    onChange={e => handleChange(e, indx)}
                  />
                </Form.Group>
                {
                  indx ?
                    <Button style={styles["btn"]}
                      className="submit"
                      onClick={() => removeFormFields(indx)}>Remove</Button>
                    : null
                }
              </div>
            )}
            <Button style={styles["btn"]}
              className="submit"
              onClick={() => addFormFields()}>
              Add
            </Button>
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

export default AddCostForm;