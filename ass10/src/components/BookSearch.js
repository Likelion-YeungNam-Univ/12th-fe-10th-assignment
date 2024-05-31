import React, { useState } from 'react';
import axios from 'axios';
import BookList from './BookList';
const API_KEY = config.apikey;

const BookSearch = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://dapi.kakao.com/v3/search/book?target=title', {
        params: { query },
        headers:{Authorization: $config.apikey},
    });
      setBooks(response.data.documents);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a book"
      />
      <button onClick={fetchBooks}>Search</button>
      <BookList books={books} />
    </div>
  );
};

export default BookSearch;
