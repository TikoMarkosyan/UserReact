import React, {Component}from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component{
  constructor(props){
    super(props);
     this.divStyle = {
    color: props.data.eyeColor,
  };
  }
  render() {
    const { props } = this;
    return (<li key={props.data._id} className="li">
      <div className="img left">
        <img src={props.data.picture} className="img"/>
      </div>
      <div className="info">
         <p>Balance : {props.data.balance}</p>
         <p>Full Name : {props.data.name.first+" "+props.data.name.last}</p>
         <p style={this.divStyle}>Eye Color</p>
      </div>
        </li>
        )}
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
