import React, { useEffect, useState } from "react";
import BookItem from "../../components/BookItem";

const Home = () => {
  const [books, setBooks] = useState([]);

  //함수 실행 시 최초 한번만 실행되는것 + []안의 값이 바뀔때마다 실행
  useEffect(() => {
    fetch("http://localhost:8080/book", {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setBooks(res);
      }); // 비동기함수
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Home;
