import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = (props) => {
  const noItemsFound = () => {
    return props.items.length === 0;
  };

  return (
    <button onClick={props.deleteLastItem} disabled={noItemsFound()}>
      Delete Last Item
    </button>
  );
};

DeleteItem.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}

export default DeleteItem;
