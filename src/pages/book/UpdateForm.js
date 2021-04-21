import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const UpdateForm = (props) => {
  const id = props.match.params.id;

  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/book/" + id)
      .then((res) => res.json())
      .then((res) => {
        setBook(res);
      });
  }, []);

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/book/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(book),
    })
      .then((res) => {
        console.log(1, res);
        if (res.status === 200) {
          res.json();
        } else {
          return null;
        }
      })
      .then((res) => {
        if (res !== null) {
          props.history.push("/book/" + id);
        } else {
          alert("책 수정 실패.");
        }
      });
  };

  return (
    <Form onSubmit={submitBook}>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Enter title' onChange={changeValue} name='title' value={book.title} />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Author</Form.Label>
        <Form.Control type='text' placeholder='Enter Author' onChange={changeValue} name='author' value={book.author} />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default UpdateForm;
