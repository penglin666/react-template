import React, { Component } from 'react';
import Header from '@/components/Layout/Header';
import Aside from '@/components/Layout/Aside';
import Footer from '@/components/Layout/Footer';
import Routers from '@/routers'
import './index.scss'
export default class Layout extends Component {
  state = {
    navList: [
      { id: 1, title: '首页', path: 'home' },
      { id: 2, title: '图库', path: 'pics' }
    ]
  }
  render() {
    const { navList } = this.state;
    return (
      <div className='layout'>
        <Header nav={navList} />
        <div className="main">
          <div className="container">
            <div className="content">{Routers()}</div>
            <div className="aside"><Aside /></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
