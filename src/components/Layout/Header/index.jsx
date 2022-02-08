import React, { Component, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'
const Header = (props) => {
  const {nav}=props;
  const navigate = useNavigate();
  let [route, setRoute] = useState(1);
  const changeRouter = (page) => {//导航页面跳转方法
    navigate(page.path)
    setRoute(route=page.id)
    document.title=page.title
  }
  useEffect(()=>{
    document.title=nav[route-1].title;
  })
  return (
    <div className='header'>
      <div className='nav'>
        {nav.map(item => <div key={item.id} onClick={() => changeRouter(item)} className={route===item.id?'active':null}>{item.title}</div>)}
      </div>
    </div>
  )
}
export default Header