import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function post() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center fm"
    //   style={{ height: "100vh" }}
    >
    {/* <div>
      <h2>Writing a good question</h2>
      <h4>Steps:</h4>
      <ul>
        <li>Summarize your problem in a one-line title.</li>
        <li>Describe your problem in more detail.</li>
        <li>Describe what you tried and what you expected to happen.</li>
        <li>Describe what you tried and what you expected to happen.</li>
        <li>Add “tags” which help surface your question to members of the community.</li>
        <li>Review your question and post it to the site.</li>
      </ul>
    </div> */}
      <div
        className="container fluid "
        // style={{ backgroundColor: "#DCF9F9" }}
      >
        {/* form */}
        <Form>
          <Form.Group className="mb-3 fm-inside " controlId="formBasicEmail">
            <Form.Label className="fm-title margin">Problem Title *</Form.Label>
            <Form.Control
              type="text"
            //   className="fm-inside"
              placeholder="e.g - What is the time complexity of lower_bound ?"
              required
              autoFocus
            />
            <Form.Text className="text-muted">
              Be specific and imagine you’re asking a question to another
              person.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 margin" controlId="formBasicEmail">
            <Form.Label className="fm-title margin">
              What are the details of your problem?
            </Form.Label>

            <Form.Control
              as="textarea"
              placeholder="Problem Description"
              style={{ height: "100px" }}
            />
          </Form.Group>

          <Row>
        <Col>
          <Form.Group as={Col} controlId="formGridState"className="category">
          <Form.Label className="fm-title margin">Category</Form.Label>
          <Form.Select defaultValue="Others" >
            <option>Development</option>
            <option>Competitive Programming</option>
            <option>Class Related Queries</option>
            <option>DSA</option>
            <option>Others</option>
          </Form.Select>
        </Form.Group>


        </Col>
        <Col >
        <label for="formFileMultiple" className="form-label fm-title margin">Upload Images</label>
<input class="form-control" type="file" id="formFileMultiple"  multiple />


        </Col>
      </Row>

            <div className="d-flex justify-content-center align-items-center margin">

          <Button variant="dark"  type="submit" className="margin">
            Add Question
          </Button>
            </div>
        </Form>
        {/* form */}
      </div>
    </Container>
  );
}
