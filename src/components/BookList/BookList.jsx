import Book from '../Book/Book';

const BookList = () => {
  const books = [];
  const booksList = books
    .map((book) => (
      <Book
        key={book.id}
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
