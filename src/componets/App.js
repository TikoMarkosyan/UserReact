import React, { Component }from 'react';
import data from './data.json';
import Header from './Header';
import SubHeader from './SubHeader';
import List from './List';
import './main.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.newdata = data.slice();
    this.data = this.newdata.map(el => {
         return {
         _id: el._id,
         balance: el.balance,
         name: el.name,
         picture:el.picture,
         isActive:el.isActive,
         eyeColor:el.eyeColor,
         picture:el.picture,
       };
     });
     this.isActive = this.data.filter(el => el.isActive);
     this.isNonActive = this.data.filter(el => !el.isActive);
   }
     render(){
       return (
         <div>
              <div>
                <Header title="User"/>
              </div>
              <div>
                    <div className='rowC'>
                    <div>
                      <SubHeader title= "isActive"/>
                    </div>
                        <List data ={this.isActive} info="0"/>
                    </div>
                    <div className='rowC'>
                    <div>
                      <SubHeader title= "isNonActive"/>
                    </div>
                      <List data ={this.isNonActive} info="0"/>
                    </div>
              </div>
         </div>
       )
     }
}
