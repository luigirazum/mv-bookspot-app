import PropTypes from 'prop-types';
import ActionButtons from '../ActionButtons/ActionButtons';

const Book = ({
  bookItem: {
    id, title, author, category, chapterName, percent,
  },
}) => {
  const bpRingStyle = {
    backgroundImage: `conic-gradient(var(--medium-blue) ${percent}%, var(--progress-color) 0)`,
  };

  return (
    <article className="book">
      <section className="bookInfo">
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
        </div>
        <ActionButtons data={id} />
      </section>
      <section className="bookProgress">
        <div className="bpIconContainer">
          <div
            className="bpIcon"
            style={bpRingStyle}
          >
            <div className="bpIconInner" />
          </div>
        </div>
        <div className="bpData">
          <h5 className="bpPercentage">
            {`${percent}%`}
          </h5>
          <p className="bpCompleted">Completed</p>
        </div>
      </section>
      <section className="bookChapter">
        <h6 className="bchCurrent">Current Chapter</h6>
        <p className="bchName">{chapterName}</p>
        <button type="button" className="bchUpdateButton">
          Update Progress
        </button>
      </section>
    </article>
  );
};

Book.propTypes = {
  bookItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chapters: PropTypes.number.isRequired,
    currentChapter: PropTypes.number.isRequired,
    chapterName: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,

};

export default Book;
