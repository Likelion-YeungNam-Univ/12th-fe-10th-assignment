import React from 'react';

const BookList = ({ books }) => {
  if (!books.length) {
    return <div>No books found</div>;
  }

  return (
    <ul>
      {books.map((book) => (
        <li key={book.isbn}>
          <h2>{book.title}</h2>
          <p>{book.authors.join(', ')}</p>
          <img src={book.thumbnail} alt={book.title} />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
