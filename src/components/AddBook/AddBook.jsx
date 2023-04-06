import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/booksSlice';

const AddBook = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // check if inputs are valid
    if (e.target.checkValidity()) {
      // add the book to the list
      dispatch(
        addBook({
          item_id: uuidv4(),
          title: newTitle,
          author: newAuthor,
          category: 'testing',
        }),
      );
      // clear the form
      setNewTitle('');
      setNewAuthor('');
    }
  };

  const onChangeHandler = (e) => (e.target.id === 'title'
    ? setNewTitle(e.target.value)
    : setNewAuthor(e.target.value)
  );

  return (
    <section className="addBook">
      <h2>Add New Book</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          id="title"
          value={newTitle}
          placeholder="Book title"
          pattern="((\w|\d)+\s?)*(\w|\d)+"
          minLength="6"
          required
          className="newTitle"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          id="author"
          value={newAuthor}
          placeholder="Author"
          minLength="6"
          pattern="(\w+\s?)*(\w)+"
          required
          className="newAuthor"
          onChange={onChangeHandler}
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
};

export default AddBook;
