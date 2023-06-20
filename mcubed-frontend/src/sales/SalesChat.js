import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Questions from './Questions';
import SalesChatRawForm from './SalesChatForm';
import SalesChatCuratedForm from './SalesChatCuratedForm';
import Solution from './Solution';

function SalesChat({ submit }) {
  console.debug("SalesChat");
  // const [isRaw, setIsRaw] = useState(true);
  // const [initialContext, setInitialContext] = useState("");
  const [solution, setSolution] = useState ("");
  const [questions, setQuestions] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  // function showCurated() {
  //   setIsRaw(false);
  // }

  return (
    <Container className="SalesChat">
      <Row>
        <Col>
        <h4>QBuilder - Questions</h4>
          {questions.length > 0 && <Questions questions={questions} />}
          {/**isRaw && <SalesChatRawForm
            submit={submit}
            showCurated={showCurated}
            initialContext={initialContext}
  setInitialContext={setInitialContext}/>*/}
          {isLoading && <p>loading...</p>}
          {solution.length === 0 && <SalesChatCuratedForm submit={submit} setSolution={setSolution} setQuestions={setQuestions} setIsLoading={setIsLoading}  />}
          {solution.length !== 0 && <Solution solution={solution} />}
        </Col>
      </Row>
    </Container>
  );
}

export default SalesChat;