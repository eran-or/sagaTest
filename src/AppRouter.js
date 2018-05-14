
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Wellcome from './components/Wellcome'
import Dashboard from './components/Dashboard'
import AddWalletForm from './components/AddWalletForm'
import Wallets from './components/Wallets'

const AppRouter = (props) => (
  // <Router basename="/delivery_manager/">
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/wellcome" component={Wellcome} exact={true} />
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/add-wallet" component={AddWalletForm} exact={true} />
        <Route path="/wallets" component={Wallets} exact={true} />
      </Switch>
    </div>
  </Router >
);

export default AppRouter