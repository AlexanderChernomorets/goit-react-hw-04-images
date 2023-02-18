import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  SearchbarHead,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

function Searchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <SearchbarHead>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <ButtonLabel>🔎</ButtonLabel>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarHead>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
