import React, { useState } from 'react';

export default function SearchBox(props) {
  const [category, setCategory] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/category/${category}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="text"
          category="q"
          id="q"
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
