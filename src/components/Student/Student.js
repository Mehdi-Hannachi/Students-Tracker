import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Student = ({
  student: { id, firstName, secondName, photo },
  sayHi,
  desc,
}) => {
  return (
    <div>
      <Link to={`/studentdetails/${id}`}>
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
      </Link>
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
