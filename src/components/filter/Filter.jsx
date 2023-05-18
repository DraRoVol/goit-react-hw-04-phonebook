import React from 'react';
import PropTypes from 'prop-types';
import cssModule from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={cssModule.filter}>
    <label htmlFor="filterInput">Find contacts by name</label>
    <input
      type="text"
      name="filter"
      id="filterInput"
      value={value}
      onChange={onChange}
      className={cssModule.input}
    />
  </div>
);

Filter.protoType = {
  value: PropTypes.node.isRequired,
  onChange: PropTypes.node.isRequired,
};

export default Filter;
