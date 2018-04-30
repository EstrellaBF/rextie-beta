import React from 'react';
import UserInfo from './userInfo.js';
import NavigationOptionsList from './navigationOptionsList.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//Style 
import '../style/css/style.css';
import playButton from '../assets/icons/play-button.png';
// import user from '../assets/icons/user.png';
import creditCard from '../assets/icons/credit-card.png';
import clockArrow from '../assets/icons/clock-arrow.png';
import logout from '../assets/icons/logout.png';

const data = {
  personalInfo: { title: 'Cuenta Personal', otherInfo: [['DNI:', 78451235], ['Ponte', 'Ana']] },
  menuOptions : [
    { route: '/rextie-beta', icon: playButton, text: 'Nueva Operación' },
    // { route: '/rextie-beta/personal-information', icon: user, text: 'Información Personal' },
    { route: '/rextie-beta/register-acount', icon: creditCard, text: 'Cuentas Bancarias Registradas' },
    { route: '/rextie-beta/historial', icon: clockArrow, text: 'Historial de Operaciones' },
    { route: '/rextie-beta/bank-rextie', icon: creditCard, text: 'Cuentas Bancarias de Rextie' },
    { route: '', icon: logout, text: 'salir' },
  ]
}

const Aside = () => {
  return(
  <div className="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-4">
    <div className="aside">
      <UserInfo title={data.personalInfo.title} otherInfo={data.personalInfo.otherInfo} />
      <NavigationOptionsList menuOptions = {data.menuOptions}/>
    </div>
  </div>
)}

export default Aside;

// icons={data.icons}