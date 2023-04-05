import books from '../books/books';
import Book from '../Book/Book';

const BookList = () => {
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
