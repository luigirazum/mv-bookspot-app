import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/booksSlice';
import { selectLibrary, selectIsLoading } from '../../redux/books/booksSelectors';
import Book from '../Book/Book';

const BookList = () => {
  const library = useSelector(selectLibrary);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const booksList = library
    .map((book) => (
      <Book
        key={book.id}
        bookItem={book}
      />
    ));

  const showBooksList = () => {
    if (booksList.length) {
      return booksList;
    }

    return (
      <aside className="booksAvailable">
        <h2>books available</h2>
        <p>Right now there are no books.</p>
        <div className="suggestion">
          <p>
            We suggest you to add some books with the
            {' '}
            <strong>add new book</strong>
            {' '}
            form below.
          </p>
        </div>
      </aside>
    );
  };

  return (
    <section className="bookList">
      {
        isLoading ? (
          <aside className="booksAvailable">
            <h2>one moment please, we are</h2>
            <p
              className="loading"
              style={{
                animationName: 'loading',
              }}
            >
              Loading...
            </p>
            <h2>the current list of Books</h2>
          </aside>
        ) : showBooksList()
      }
    </section>
  );
};

export default BookList;
