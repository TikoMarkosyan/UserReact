import React from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

export default function List(props) {
  var numberPattern = /\d+/g;
  const resdata  = props.data.sort((a,b) => (a.balance.match(numberPattern) < b.balance.match(numberPattern))  ? 1 : -1);
    return <ol key={props.info}>
      {resdata.map(el => <ListItem data= {el} />)}
    </ol>
}

List.propTypes = {
   optionalArrayOf: PropTypes.arrayOf(PropTypes.object),
};
