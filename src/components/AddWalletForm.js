import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'

class AddWalletsForm extends Component {
  
  isValid = ()=>{
    return true
  }


  render(){

    return (
      <div className="container text-center mt-10 d-flex flex-column add-form p-2">
        <h3 className="">Add a wallet</h3>
        <input className="mb-2 p-1" placeholder="Wallet Address" type="text" name="address" />
        <input className="mb-2 p-1"  placeholder="Wallet Nick Name" type="text" name="nickname" />

        <h6 className="text-left fs-11">Make Sure:</h6>
        <div className="d-flex justify-content-between">
          <div className="text-left fs-11">
            <p>You hold the private key of this Wallet address<br />
            The wallet address is an ERC 20 comliant
            </p>
          </div>
          <div className="text-left col-6 fs-11">
            <p>You inserted the public address<br/>
            Another bullet point that says somthing</p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
        <div><NavLink to="add-wallet" className="pr-5">Cancel</NavLink></div>
        <div onClick={this.isValid}><NavLink to="wallets">Add</NavLink></div>
        </div>
        </div>
    )
  }
}

export default AddWalletsForm