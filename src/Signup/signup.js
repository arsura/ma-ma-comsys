import React from 'react';
import './signup.css';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false,
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        var user = {
            "username": username,
            "password": password
        }

        fetch('http://localhost:8080/create-account', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    redirect: true,
                })
            }
        })

    }

    render() {

        if (this.state.redirect) {
            return (
                <div className='signup-container'>
                    <h1>สมัครเรียบร้อยจ้าา</h1>
                </div>
            );
        }

        return (
            <div className='signup-container'>
                <h1>เข้าร่วมกับเราชาตินี้</h1>
                <input type='text' placeholder='ชื่อ-นามสกุล'></input>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange} placeholder='โทรศัพท์หรืออีเมล์'></input>
                <input type='password' value={this.state.password} onChange={this.handlePasswordChange} placeholder='รหัสผ่าน'></input>
                <button onClick={this.handleSubmit}>สมัครสมาชิก</button>
            </div>
        );
    }
}

export default SignUp;