import React from 'react';
import PropTypes from 'prop-types';
export default function ListItem(props) {
  const divStyle = {
  color: props.data.eyeColor,
};
  return <li key={props.data._id} className="li">
    <div className="img left">
      <img src={props.data.picture} className="img"/>
    </div>
    <div className="info">
       <p>Balance : {props.data.balance}</p>
       <p>Full Name : {props.data.name.first+" "+props.data.name.last}</p>
       <p style={divStyle}>Eye Color</p>
    </div>
        </li>
}
ListItem.propTypes = {
  optionalObjectWithShape: PropTypes.shape({
    balance: PropTypes.string,
    name: PropTypes.object,
    _id: PropTypes.string,
    eyeColor: PropTypes.string,
    picture: PropTypes.string,
    eyeColor: PropTypes.string,
  }),
}
