import React from 'react';
import data from './data.json';
import Header from './Header';
import SubHeader from './SubHeader';
import List from './List';
import './main.css';
export default function App() {
  const dataarr = data.map(el => {
        return {
        _id: el._id,
        balance: el.balance,
        name: el.name,
        picture:el.picture,
        isActive:el.isActive,
        eyeColor:el.eyeColor,
        picture:el.picture,
      }; });
  const isActive = dataarr.filter(el => el.isActive);
  const isNonActive = dataarr.filter(el => !el.isActive);
  return <div>
              <div>
                <Header title="User"/>
              </div>
              <div>
                    <div className='rowC'>
                    <div>
                      <SubHeader title= "isActive"/>
                    </div>
                      <List data ={isActive} info="1"/>
                    </div>
                    <div className='rowC'>
                    <div>
                      <SubHeader title= "isNonActive"/>
                    </div>
                      <List data ={isNonActive} info="2" />
                    </div>
              </div>
        </div>;
}
