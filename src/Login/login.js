import React from 'react';
import { Link, Redirect } from "react-router-dom";
import './login.css';

const fakeAuth = {
    isAuthenticated: false,
    userName: '',
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        this.userName = '';
        setTimeout(cb, 100);
    }
};

const Logout = () => {
    fakeAuth.signout();
    return <Redirect to='/' />;
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false,
            isInvalid: false,
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        var username = this.state.username;
        var password = this.state.password;
        if (username === 'siwakorn' && password === '123456') {
            //console.log('Login Complete');
            fakeAuth.userName = this.state.username;
            fakeAuth.authenticate(() => {
                this.setState({ redirectToReferrer: true });
            });
        }
        else {
            //console.log('Invalid Username or Password')
            this.setState({
                isInvalid: true,
            })
        }
    }
    
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleSubmit(event);
        }
    }

    render() {

        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            //console.log(this.state)
            return <Redirect to={'/'} />;
        }

        return (
            <div className="login-block">
                <h1>เข้าสู่ระบบ</h1>
                {this.state.isInvalid ? 
                    (
                        <div className='invalid-user'>
                            กรุณาใส่ชื่อผู้ใช้งานหรือรหัสผ่านให้ถูกต้อง
                        </div>
                    ) : ('')}
                <input type="text" value={this.state.username} onChange={this.handleUsernameChange} onKeyPress={this.handleKeyPress} placeholder="ชื่อผู้ใช้งาน" />
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} onKeyPress={this.handleKeyPress} placeholder="รหัสผ่าน" />
                <Link className="forget-pass" to="">ลืมรหัสผ่าน</Link>
                <button onClick={this.handleSubmit}>เข้าสู่ระบบ</button>
            </div>
        );
    }
}

export { Login, fakeAuth, Logout }