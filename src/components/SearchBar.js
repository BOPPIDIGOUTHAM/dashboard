import React from 'react';
import { useDispatch } from 'react-redux';
import { searchWidgets } from '../store/actions';
import { TextField } from '@mui/material';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchWidgets(e.target.value));
  };

  return (
    <TextField
      label="Search widgets..."
      onChange={handleSearch}
      fullWidth
      margin="normal"
      style={{ backgroundColor: '#fff', borderRadius: '5px' }}
    />
  );
};

export default SearchBar;
