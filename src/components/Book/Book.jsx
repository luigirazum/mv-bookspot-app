import PropTypes from 'prop-types';
import ActionButtons from '../ActionButtons/ActionButtons';

const Book = ({ bookItem: { title, author, category } }) => (
  <article className="book">
    <h3 className="bookCategory">
      {category}
    </h3>
    <h2 className="bookTitle">
      {title}
    </h2>
    <p className="bookAuthor">
      {author}
    </p>
    <ActionButtons />
  </article>
);

Book.propTypes = {
  bookItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,

};

export default Book;
