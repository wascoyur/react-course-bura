import React from 'react';
const SearchPanel = () => {
  const textToSearch = 'Type here';
  const searchStyle = {fontSize: '25px'}
  return (

    <input
    style = {searchStyle}
    placeholder = { textToSearch } />
  )
}
export default SearchPanel;
