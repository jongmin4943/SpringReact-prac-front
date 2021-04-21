import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Link to={"/book/" + book.id} className='btn btn-primary'>
          상세보기
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
