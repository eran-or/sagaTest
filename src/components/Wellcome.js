import React from 'react'
import { NavLink } from 'react-router-dom'

const Wellcome = (props) => {
  return (
    <div className="container">
      <h3 className="navbar-brand mb-0">Wallets</h3>
      <p>Wellcome to the wallets section.<br />
      Now that your are identified as Saga participant we can start by connecting a wallets to your account</p>

      <p>We respect your privacy.<br />
      Saga will never publicly reval participants identities<br />
      Participant identities cannot be connected to wallets 
      <div className="gray"><NavLink to="/identities">Learn More </NavLink></div></p>
      <div>
        <NavLink to="/dashboard">Continue</NavLink>
      </div>
    </div>
  )
}

export default Wellcome