import React from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import { BiUpvote, BiDownvote } from "react-icons/bi";

const Comment = () => {
  return (
    <>
      {/* Add comment form */}
      <Container>
        <Form>
          <Row>
            <Col md={1} xs={1} className="d-flex align-items-center">
              <Image
                roundedCircle
                src="assest/pi1.png"
                style={{ width: "2rem", height: "2rem" }}
              />
            </Col>
            <Col
              md={7}
              xs={7}
              className="d-flex align-items-center"
              style={{ marginLeft: "4px", paddingRight: "0px" }}
            >
              <Form.Control type="text" placeholder="Add a comment" />
            </Col>
            <Col md={3} xs={3} className="d-flex align-items-center">
              <Button
                className="border-radius-1 mx-0 bg-secondary"
                style={{ fontSize: "small", width: "25rem" }}
              >
                Add{" "}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      {/* Sort button */}
      <Container className="d-flex justify-content-end my-1">
        <Button>Sort by upvotes</Button>
      </Container>

      {/* Individual comment section */}
      <Container
        fluid
        className="border border-2"
        style={{ width: "100%", padding: "1rem 1rem" }}
      >
        <Row>
          <Col md={1} xs={1} className="d-flex align-items-center">
            <Image
              roundedCircle
              src="assest/pi1.png"
              style={{ width: "2rem", height: "2rem" }}
            />
          </Col>
          <Col md={11} xs={11} className="px-3">
            <Row>
              <Col md={12} xs={12}>
                <h6 style={{ paddingTop: "0.5rem", marginBottom: "0px" }}>
                  Soniya Mishra
                </h6>
              </Col>
            </Row>
            <Row>
              <span style={{ fontSize: "0.8rem" }}>Feb 29</span>
            </Row>
          </Col>
        </Row>
        <Row>
          <p style={{ lineHeight: "1.2rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            minima nemo quis, voluptates nisi, delectus minus natus tempore m
            porro, consectetur asperiores vel distinctio sed magnam eveniet
            facilis nobis.
          </p>
        </Row>
        <div className="d-flex">
          <Button
            className="border-1 bg-light d-flex align-items-center mx-2 text-dark "
            style={{ width: "10%", height: "1.5rem", padding: "1px" }}
          >
            <BiUpvote className="text-success" />{" "}
            <span style={{ fontSize: "0.8rem" }}>123</span>
          </Button>
          <Button
            className="border-1 bg-light d-flex align-items-center"
            style={{ width: "5%", height: "1.5rem", padding: "1px" }}
          >
            <BiDownvote className="text-danger" />
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Comment;
