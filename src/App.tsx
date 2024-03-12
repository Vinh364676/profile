import React from 'react';

import './App.css';
import HeaderLayout from './component/header/header';
import Profile from './component/profile/profile';
import Layout from './component/Layout/Layout';
import { FloatButton } from 'antd';
function App() {
  return (
    <div
    style={{
    
    }} className="App" >
    <Layout/>
    <FloatButton.BackTop />
    </div>
  );
}

export default App;
