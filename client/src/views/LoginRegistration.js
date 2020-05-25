import React, { Component } from 'react';
import '../components/css/Login.css';

class LoginRegistration extends Component {
   

    render() {
        return(
            <div className="intro-body">
                <div id ="form1" class="intro-body">
                    Email: <input placeholder="Email" type="mail" name="name" />
                    <br></br>
                    Password: <input placeholder ="Password" type="password" name="password" />
                    <br></br>
                    <input type="submit" class="submit1" value="login" />
                </div>
            <div id="intro1" class="intro-body">Create Your Account Here</div>
            <br></br>
            <div id="intro2" class="intro-body">Start playing against your friends now!</div>
            <div id="form2" class="intro-body">
                <br></br>
                <input placeholder="First Name" type="text" id="namebox" name="name1" />
                <br></br>
				<input placeholder="Last Name" type="text" id="namebox"  />
                <br></br> 
				<input placeholder="Email" type="text" id="mailbox" />
                <br></br>
				<input placeholder="Re-enter email" type="text" id="mailbox"  />
                <br></br>
				<input placeholder="Password" type="password" id="mailbox"  />
                <br></br>
				<input type="date" id="namebox"  />
                <br></br>
				<p id="intro3">By clicking submit, you agree to our Terms and Conditions</p>
                <br></br>
				<input type="submit" class="button2" value="Create an account" />
                </div>
            </div>
        )
    }
}

export default LoginRegistration;