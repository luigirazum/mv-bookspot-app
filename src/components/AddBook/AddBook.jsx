const AddBook = () => (
  <section className="addBook">
    <h2>Add New Book</h2>
    <form>
      <input
        type="text"
        id="title"
        placeholder="Book title"
        pattern="((\w|\d)+\s?)*(\w|\d)+"
        minLength="6"
        required
        className="newTitle"
      />
      <input
        type="text"
        id="author"
        placeholder="Author"
        minLength="6"
        pattern="(\w+\s?)*(\w)+"
        required
        className="newAuthor"
      />
      <button
        type="submit"
        className="btn btn-add"

      >
        Add Book
      </button>
    </form>
  </section>
);

export default AddBook;
