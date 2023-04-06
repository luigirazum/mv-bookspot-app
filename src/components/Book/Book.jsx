import PropTypes from 'prop-types';
import ActionButtons from '../ActionButtons/ActionButtons';

const Book = ({
  bookItem: {
    id, title, author, category,
  },
}) => (
  <article className="book">
    <h3 className="bookCategory">
      {category}
    </h3>
    <div className="bookData">
      <div className="bookDescription">
        <h2 className="bookTitle">
          {title}
        </h2>
        <p className="bookAuthor">
          {author}
        </p>
      </div>
      <div className="bookProgress">
        <h2 className="bookPercent">
          0%
        </h2>
        <p className="bookCompleted">
          completed
        </p>
      </div>
    </div>
    <ActionButtons data={id} />
  </article>
);

Book.propTypes = {
  bookItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,

};

export default Book;
