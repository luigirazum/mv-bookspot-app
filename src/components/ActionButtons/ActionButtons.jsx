const ActionButtons = () => {
  const actionsList = '1,Comments]-[2,Remove]-[3,Edit';
  const actionBtnList = actionsList.split(']-[');

  const actionButtons = actionBtnList
    .map((actionButton) => {
      const [id, btnText] = actionButton.split(',');

      return (
        <li
          key={id}
          className="actionItem"
        >
          <button
            type="button"
            className="btn-link"
          >
            {btnText}
          </button>
        </li>
      );
    });

  return (
    <ul className="actionButtons">
      {actionButtons}
    </ul>
  );
};

export default ActionButtons;
