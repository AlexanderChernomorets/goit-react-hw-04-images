import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  SearchbarHead,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <SearchbarHead>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <ButtonLabel>🔎</ButtonLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHead>
    );
  }
}

Searchbar.propTypes ={
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
