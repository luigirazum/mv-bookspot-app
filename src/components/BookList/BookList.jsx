import { useSelector } from 'react-redux';
import { selectLibrary } from '../../redux/books/booksSlice';
import Book from '../Book/Book';

const BookList = () => {
  const { library } = useSelector(selectLibrary);

  const booksList = library
    .map((book) => (
      <Book
        key={book.item_id}
        bookItem={book}
      />
    ));

  return (
    <section className="bookList">
      {
      booksList.length
        ? booksList
        : (
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
        )
      }
    </section>
  );
};

export default BookList;
