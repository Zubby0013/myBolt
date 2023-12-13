import Header from '../Static/Header';
import Sider from '../Static/Sider';
import { Outlet } from 'react-router-dom';
import { FC } from "react";
import { useSelector } from "react-redux";
import Footer from '../Static/Footer';



const Layout = () => {
  return (
    <div>
           <Header/>
           <Outlet/>
           <Footer/>
    </div>
  )
}

export default Layout;