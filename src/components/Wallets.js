import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class AddWalletsForm extends Component {

  render() {

    return (
      <div className="container text-center mt-10 d-flex flex-column">
        <h3 className="">Wallets</h3>
        <div className="justify-content-center d-flex flex-column">
        <div className="justify-content-center d-flex">
          <div className="bullet mr-1 mt-1"></div>
          <p className="red">
            Add a wallet.  This allow you to recive, hold and send SGA<br />
            You will be asked to enter your wallet's public address
              <NavLink to="add-wallet">Add a Wallet</NavLink> 
          </p>
          </div>
          
          
        </div>
      </div>
    )
  }
}

export default AddWalletsForm