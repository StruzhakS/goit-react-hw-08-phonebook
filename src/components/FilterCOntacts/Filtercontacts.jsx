import React, { useState } from 'react';
import s from './Filtercontacts.module.css';
import { useDispatch } from 'react-redux';
import { filterContactAction } from 'strore/contacts/contactSlice';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const filterContacts = ({ target: { value } }) => {
    setFilter(value);
    dispatch(filterContactAction(value));
  };

  return (
    <label className={s.filter}>
      <p className={s.filtereText}> Find contacts by name</p>
      <input
        className={s.input}
        onChange={filterContacts}
        name="filter"
        type="text"
        value={filter}
        placeholder="Enter name to search"
      />
    </label>
  );
};

export default Filter;
