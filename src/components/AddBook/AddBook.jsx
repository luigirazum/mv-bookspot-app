import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { saveBook } from '../../redux/books/booksSlice';
import getRandomCategory from '../../redux/helpers/categoryInitializer';
import getRandomInfo from '../../redux/helpers/bookInfoInitializer';

const AddBook = () => {
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // check if inputs are valid
    if (e.target.checkValidity()) {
      // save the book at the API
      const randomInfo = [
        getRandomCategory(),
        JSON.stringify(getRandomInfo()),
      ];

      const fullBookInfo = randomInfo.join(']-[');

      dispatch(saveBook({
        item_id: uuidv4(),
        title: newTitle,
        author: newAuthor,
        category: fullBookInfo,
      }));

      // clear the form
      setNewTitle('');
      setNewAuthor('');
      e.target.parentElement.previousSibling.previousSibling.focus();
    }
  };

  const onChangeHandler = (e) => (e.target.id === 'title'
    ? setNewTitle(e.target.value)
    : setNewAuthor(e.target.value)
  );

  const onKeyDownCaptureHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.nextSibling.focus();
    }
  };

  return (
    <section className="addBook">
      <h2>Add New Book</h2>
      <form id="addNewBook" onSubmit={onSubmitHandler}>
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
          onKeyDownCapture={onKeyDownCaptureHandler}
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
          onKeyDownCapture={onKeyDownCaptureHandler}
        />
        <button
          type="submit"
          id="submitBook"
          className="btn btn-add"
        >
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
