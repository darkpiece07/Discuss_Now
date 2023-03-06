import React, { useState } from "react";
import { Card, Row, Col, Image, Table, Button } from "react-bootstrap";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import Comment from "../components/Comment";

const PostCard = () => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <Card style={{ width: "80%" }} className="border border-2 border-dark my-2">
        <Card.Body>
          <Row>
            <Col md={2} xs={2} className="d-flex align-items-center">
              <Image
                roundedCircle
                src="assest/pi1.png"
                style={{ width: "4rem", height: "4rem" }}
              />
            </Col>
            <Col md={10} xs={10} className="px-3">
              <Row>
                <Col md={8} xs={8}>
                  <h4 style={{ paddingTop: "1rem", marginBottom: "0px" }}>
                    Soniya Mishra
                  </h4>
                </Col>
                <Col md={4} xs={4}>
                  <div style={{ paddingTop: "1rem" }}>
                    <a href="/">Follow</a>
                  </div>
                </Col>
              </Row>
              <Row>
                <p> Lorem ipsum dolor sit amet consectetur.</p>
              </Row>
            </Col>
          </Row>
          <Card.Title>Something I don't know</Card.Title>
          <span className="text-danger">Design</span>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            corporis vel tenetur accusamus maiores optio eaque facilis,
            reprehenderit odio aliquid iste, soluta voluptatibus dolorum
            veritatis aperiam non perferendis a ea.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="down" src="assest/pi2.png" />
        <Row className="mx-2">
          <Col md={8} xs={6}>
            <Table
              className="striped border border-dark border-2"
              style={{ width: "60%" }}
            >
              <tbody>
                <tr>
                  <td className="striped border border-dark border-2">
                    <BiUpvote
                      className="text-success"
                      style={{ cursor: "pointer" }}
                    />{" "}
                    Upvote 12.5K
                  </td>
                  <td>
                    <BiDownvote
                      className="text-danger"
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={4} xs={5} style={{ marginLeft: "auto" }}>
            <Button
              className="text-center bg-light text-dark"
              style={{ paddingTop: "0.5rem" }}
              onClick={toggleComments}
            >
              <AiOutlineComment
                className="text-primary"
                style={{ cursor: "pointer" }}
              />{" "}
              112 Discuss
            </Button>
          </Col>
        </Row>
        {showComments && <Comment/>}
      </Card>
    </>
  );
};

export default PostCard;
