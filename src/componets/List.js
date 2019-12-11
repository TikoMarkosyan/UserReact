import React, {Component} from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import SubHeader from './SubHeader'


export default class List extends Component {
  constructor(props){
    super(props);
     this.counts = this.props.info;
     this.newdata = this.props.data.slice();
     this.newdata.sort((a,b) => (a.balance.match(/\d+/g) < b.balance.match(/\d+/g))  ? 1 : -1);
     this.dataobj = {
       green: this.newdata.filter(el => el.eyeColor === 'green'),
       blue:  this.newdata.filter(el => el.eyeColor === 'blue'),
       brown: this.newdata.filter(el => el.eyeColor === 'brown'),
     };
    this.state = {
        value: 0,
      };
     this.arrcolor = Object.keys(this.dataobj);
     this.clr = setInterval(() => {
       this.forceUpdate();
    },5000);
  }
    componentWillUpdate(){
      console.log("componentWillUpdate");
      this.clr2 = setInterval(() => {
        this.setState ({
         value: this.counts++
       });
     },3000);
    }
    shouldComponentUpdate(){
      if(this.state.value > 3){
        clearInterval(this.clr);
        clearInterval(this.clr2);
        return false;
      }
      return true;
    }
  render(){
    return ( <ol key={this.props.info}>
      <div className="rowC wi">
          <div>
            <SubHeader title={this.arrcolor[0]}/>
          </div>
          {
            this.state.value > 0 ?
            this.dataobj.green.map(el => <ListItem data= {el}/>) : "Loding.."
          }
      </div>
      <div className="rowC wi">
      <div>
        <SubHeader title={this.arrcolor[1]}/>
      </div>
          {
            this.state.value > 2 ?
            this.dataobj.blue.map(el => <ListItem data= {el} />) : "Loding.."
          }
      </div>
      <div className="rowC wi">
      <div>
        <SubHeader title={this.arrcolor[2]}/>
      </div>
      {
        this.state.value > 3 ?
            this.dataobj.brown.map(el => <ListItem data= {el} />) : "Loding.."
        }
      </div>
    </ol>);
  };
}

List.propTypes = {
   optionalArrayOf: PropTypes.arrayOf(PropTypes.object),
};
