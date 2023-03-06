import React from "react";
import Post from "./Post";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Land = () => {
  return (
    <>
      <Container fluid className="m-auto py-4 bg-primary">
        <Row>
          <Col md={3} className="my-2 mx-4">
            <ListGroup className="sticky-top">
              <ListGroup.Item className="bg-secondary">
                Sort Feed
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Development
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Competitive Programming
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Class Related Queries
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                DSA
              </ListGroup.Item>
              <ListGroup.Item action variant="info">
                Others
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <Post />
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Land;
