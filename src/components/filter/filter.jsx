import React from 'react';

import css from 'components/filter/filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilterContact = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilterContact}
      />
    </label>
  );
};

export default Filter;
