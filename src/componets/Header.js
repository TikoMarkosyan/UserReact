import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return <h1 className="title">{props.title}</h1>;
}
Header.propTypes = {
   optionalObject: PropTypes.object
};
