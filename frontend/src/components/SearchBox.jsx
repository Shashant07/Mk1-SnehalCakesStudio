import React, { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from "react-icons/fi";
import { Button, Form } from 'react-bootstrap';

const SearchBox = () => {
    const navigate = useNavigate();
    const { keyword: urlKeyword } = useParams();

    // FIX: uncontrolled input - urlKeyword may be undefined
    const [keyword, setKeyword] = useState(urlKeyword || '');

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
        navigate(`/search/${keyword.trim()}`);
        setKeyword('');
        }
    };
  return (
    <Form onSubmit={submitHandler} className='search-box'>
      <Button type='submit' className='btn-search btn btn-outline-secondary'>
        <FiSearch />
      </Button>
      <Form.Control
        type='search'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Cakes..'
        className='input-search'
      ></Form.Control>
    </Form>
  )
}

export default SearchBox;