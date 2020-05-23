import React, { Component } from 'react';

class LoginRegistration extends Component {
   

    render() {
        return(
            <div className="intro-body">
                <div id="form2" class="intro-body">
                <input placeholder="First Name" type="text" id="namebox" name="name1" />
				<input placeholder="Last Name" type="text" id="namebox"  /> 
				<input placeholder="Emai" type="text" id="mailbox" />
				<input placeholder="Re-enter email" type="text" id="mailbox"  />
				<input placeholder="Password" type="password" id="mailbox"  />
				<input type="date" id="namebox"  />
				<input type="radio" id="r-b" name="sex" value="male" />Male
				<input type="radio" id="r-b" name="sex" value="female" />Female
				<p id="intro2">By clicking Create an account, you agree to our Terms and that 
				you have read our Data Policy, including our Cookie Use.</p>
				<input type="submit" class="button2" value="Create an account" />
                </div>
            </div>
        )
    }
}

export default LoginRegistration;