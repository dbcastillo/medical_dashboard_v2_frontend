import React from 'react'
import { doctorLogo } from './DoctorLogo'
import { nurseLogo } from './NurseLogo'
import { assistantLogo } from './AssistantLogo'
import { userLogo } from './UserLogo'
import { passLogo } from './PassLogo'

class LoginPage extends React.Component {
  state = {
    hello: '',
    login: ''
  }

  doctorClick = () => {
    this.setState({hello: 'Hello Doctor!', login: 'Please login to get started'})
  }
  nurseClick = () => {
    this.setState({hello: 'Hello Nurse!', login: 'Please login to get started'})
  }
  assistantClick = () => {
    this.setState({hello: 'Hello Assistant!', login: 'Please login to get started'})
  }

  render() {
    return (
      <div className="login-div">
        <h1>Choose Account Type</h1>
        <div className="dr-logo-container">
          <div className="doctor-card" onClick={this.doctorClick}>
            <img src={doctorLogo} className="role-img"/>
            <h4>Doctor</h4>
          </div>
          <div className="nurse-card" onClick={this.nurseClick}>
          <img src={nurseLogo} className="role-img"/>
          <h4>Nurse</h4>
          </div>
          <div className="assistant-card" onClick={this.assistantClick}>
          <img src={assistantLogo} className="role-img"/>
          <h4>Assistant</h4>
          </div>
        </div>
        <div className="greeting-div">
          <h3>{this.state.hello}</h3>
          <h3>{this.state.login}</h3>
        </div>
        <div className="form-div">
          <form>
            <label>
              <img src={userLogo} className="username-img"/>
              <input type="text" placeholder="Username"/><br/>
            </label><br/>
            <label>
              <img src={passLogo} className="pass-img"/>
              <input type="text" placeholder="Password"/><br/>
            </label><br/>
            <input type="submit" value="Login" className="login-button"/>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage