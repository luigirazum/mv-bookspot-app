import { v4 as uuidv4 } from 'uuid';
import Book from '../Book/Book';

const BookList = () => {
  const books = [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ];

  const booksList = books
    .map((book) => (
      <Book
        key={book.id}
        bookItem={book}
      />
    ));

  return (
    <section className="bookList">
      {booksList}
    </section>
  );
};

export default BookList;
