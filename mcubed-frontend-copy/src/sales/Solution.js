import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Solution({solution}) {

  return (
    <Container>
      <Row >
        <Col xs={2}>
        </Col>
        <Col xs={8}>
        <h4>
          {solution}
        </h4>
        </Col>
        <Col xs={2}>
        </Col>
      </Row>
    </Container>
  );
}

export default Solution;