import React from 'react';
// import TransactionHistory from "./TransactionHistory";
// import RextieBankAccounts from "./RextieBankAccounts";
import { Switch, Route } from 'react-router-dom';
import TransactionHistory from "./TransactionHistory";
import RextieBankAccounts from "./RextieBankAccounts";
// import NewOperation from './NewOperation';
import NewOperation from '../containers/NewOperation';
import RegisterAccount from './RegisterAccount';
import PersonalInformation from './PersonalInformation';

import '../style/css/style.css'

const Main = () => {
  return (
    <main className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-8">
      <Switch>
        <Route exact path='/rextie-beta/' component={NewOperation} />
        {/* <Route path= '/rextie-beta/personal-information' component={PersonalInformation}/> */}
        <Route path='/rextie-beta/historial' component={TransactionHistory} />
        <Route path='/rextie-beta/bank-rextie' component={RextieBankAccounts} />
        <Route path='/rextie-beta/register-acount' component={RegisterAccount} />
      </Switch>
    </main>
  )
}

export default Main;
