import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Student = ({
  student: { firstName, secondName, photo },
  sayHi,
  desc,
}) => {
  return (
    <div>
      <Card style={{ width: "18rem", margin: "40px" }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{firstName}</Card.Title>
          <Card.Title>{secondName}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="primary" onClick={() => sayHi(firstName)}>
            Say Hi
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Student;

Student.defaultProps = {
  desc: "No Description",
};

Student.propTypes = {
  sayHi: PropTypes.func,
};
