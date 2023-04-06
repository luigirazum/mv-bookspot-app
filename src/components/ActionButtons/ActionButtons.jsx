import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksSlice';

const ActionButtons = ({ data }) => {
  const actionsList = '1,comments]-[2,remove]-[3,edit';
  const actionBtnList = actionsList.split(']-[');
  const dispatch = useDispatch();

  const actionButtons = actionBtnList
    .map((actionButton) => {
      const [id, btnText] = actionButton.split(',');

      const onClickHandler = (e) => {
        if (e.target.id === 'remove') {
          const { id } = e.target.parentElement.parentElement.dataset;
          dispatch(removeBook(id));
        }
      };

      return (
        <li
          key={id}
          className="actionItem"
        >
          <button
            type="button"
            className="btn-link"
            id={btnText}
            onClick={onClickHandler}
          >
            {btnText}
          </button>
        </li>
      );
    });

  return (
    <ul className="actionButtons" data-id={data}>
      {actionButtons}
    </ul>
  );
};

ActionButtons.propTypes = {
  data: PropTypes.string.isRequired,
};

export default ActionButtons;
