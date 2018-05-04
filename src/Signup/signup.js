import React from 'react';
import { Redirect } from 'react-router-dom';
import './signup.css';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
        }
        this.setRedirect = this.setRedirect.bind(this);
    }

    setRedirect() {
        this.setState({
            redirect: true,
        })

    }

    render() {

        if (this.state.redirect) {
            console.log(this.state.redirect);
            return <Redirect to='/' />;
        }

        return (
            <div className='signup-container'>
                {this.renderRedirect}
                <h1>เข้าร่วมกับเราชาตินี้</h1>
                <input type='text' placeholder='ชื่อ-นามสกุล'></input>
                <input type='text' placeholder='โทรศัพท์หรืออีเมล์'></input>
                <input type='password' placeholder='รหัสผ่าน'></input>
                <button onClick={this.setRedirect}>สมัครสมาชิก</button>
            </div>
        );
    }
}

export default SignUp;