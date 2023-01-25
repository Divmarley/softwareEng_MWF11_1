/** @format */

import React from 'react';

export default function AppInput(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
