import * as React from 'react';
import {lazy,Suspense} from 'react';
import { Route, Routes} from 'react-router-dom';
const Home=lazy(()=>import('../views/home'))
const Pics=lazy(()=>import('../views/pics'))
export const routers=[//这里是单页面的路由
  {
    path:'home',
    element:<Home/>,
  },
  {
    path:'pics',
    element:<Pics/>,
  }
]
const Routers = () =>
  <Routes>
    {
      routers.map((r,i) => {
        const { path,element } = r
        return <Route key={i} exact path={path} element={
          <Suspense fallback={<div>loading...</div>}>
            {element}
          </Suspense>
        }/>
      })
    }
  </Routes>
export default Routers
