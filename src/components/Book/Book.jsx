import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ActionButtons from '../ActionButtons/ActionButtons';
import { selectBookById } from '../../redux/books/booksSelectors';

const Book = ({ bookItem: { id } }) => {
  const [book] = useSelector((store) => selectBookById(store, id));
  const {
    title, author, category, chapterName, percent,
  } = book;

  return (
    <article className="book">
      <section className="bookInfo">
        <h3 className="bookCategory">
          {category}
        </h3>
        <div className="bookDescription">
          <h2 className="bookTitle">
            {title}
          </h2>
          <p className="bookAuthor">
            {author}
          </p>
        </div>
        <ActionButtons data={id} />
      </section>
      <section className="bookProgress">
        <div className="bpSpinnerIcon">
          <div
            className="bpSpinner"
            style={{
              '--spin-progress': percent,
              '--spin-percent': 'calc(var(--spin-progress) * 360 / 100 * 1deg)',
              animationName: `spin-${id}`,
              animationDuration: '3s',
              animationFillMode: 'forwards',
              animationTimingFunction: 'ease-out',
            }}
          >
            <style>
              {`@keyframes spin-${id} {
                0% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0), var(--color-gray-c4) 0deg); }
                5% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.05), var(--color-gray-c4) 0deg); }
                10% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.10), var(--color-gray-c4) 0deg); }
                15% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.15), var(--color-gray-c4) 0deg); }
                20% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.20), var(--color-gray-c4) 0deg); }
                25% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.25), var(--color-gray-c4) 0deg); }
                30% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.30), var(--color-gray-c4) 0deg); }
                35% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.35), var(--color-gray-c4) 0deg); }
                40% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.40), var(--color-gray-c4) 0deg); }
                45% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.45), var(--color-gray-c4) 0deg); }
                50% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.50), var(--color-gray-c4) 0deg); }
                55% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.55), var(--color-gray-c4) 0deg); }
                60% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.60), var(--color-gray-c4) 0deg); }
                65% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.65), var(--color-gray-c4) 0deg); }
                70% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.70), var(--color-gray-c4) 0deg); }
                75% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.75), var(--color-gray-c4) 0deg); }
                80% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.80), var(--color-gray-c4) 0deg); }
                85% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.85), var(--color-gray-c4) 0deg); }
                90% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.90), var(--color-gray-c4) 0deg); }
                95% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 0.95), var(--color-gray-c4) 0deg); }
                100% { background-image: conic-gradient(var(--color-blue-x) calc(var(--spin-percent) * 1), var(--color-gray-c4) 0deg); }
              }
              `}
            </style>
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
        <button type="button" className="btn btn-upd">
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
