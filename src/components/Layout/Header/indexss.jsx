import React, { Component, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './index.scss'
export default class Header extends Component {
 constructor(props){
   super(props)
 }
  changeRouter = (path) => {
    return <Navigate to={path}/>
  }
  render() {
    const { nav } = this.props;
    return (
      <div className='header'>
        <div className='nav'>
          {nav.map(item => <div key={item.id} onClick={() => this.changeRouter(item.path)}>{item.text}</div>)}
        </div>
      </div>
    )
  }
}
