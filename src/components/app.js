import React from 'react';
import Header from './Header'
import Main from './main'
import Aside from './aside';

// estilo

import '../style/css/style.css'
import logo from '../assets/icons/logo.png'

const App = () => (
  <div>
    <Header
      url={logo}
    />
    <div className="container-fluid">
      <div className="row">
        <Aside />
        <Main /> 
      </div>
    </div>
  </div>
)   

export default App;