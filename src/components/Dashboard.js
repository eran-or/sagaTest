import React from 'react'
import { NavLink } from 'react-router-dom'

const Dashboard = (props) => {
  return (
    <div className="container text-center mt-10">
      <h3 className="">Add a wallet</h3>
      <p>This allows you to recive, hold and send SGA<br />
      You will be asked to enter your wallets public address</p>
      <div><NavLink to="add-wallet">Add a Wallet</NavLink></div>
      </div>
  )
}

export default Dashboard