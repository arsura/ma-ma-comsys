import React from 'react';
import { fakeAuth } from '../Login/login';
import './profile.css'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        };
        this.editProfile = this.editProfile.bind(this);
    }

    editProfile() {
        this.setState({
            edit: true,
        });
        console.log(this.state.edit);
    }

    render() {

        const userDetails = {
            userName: fakeAuth.userName,
            realName: 'Siwakorn Ruenrit',
            work: 'นักศึกษา',
            email: 'siwakornr@email.nu.ac.th'
        };

        //const test = this.state.edit ? (<h1>แก้ไขโปรไฟล์</h1>) : (<h1>เฉย ๆ</h1>);


        const detailsContent = fakeAuth.isAuthenticated ?
            (
                <div className='profile-container'>
                    <img src='https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/29513199_1623533547731278_723604520850528403_n.jpg?_nc_cat=0&oh=45b11209c957f60e70d9622b5ef64837&oe=5B6AA7CF' alt='' />
                    <h1>{userDetails.realName}</h1>
                    <h2>{userDetails.work}</h2>
                    <h2>{userDetails.email}</h2>
                    <button onClick={this.editProfile}>แก้ไขโปรไฟล์</button>
                </div>
            ) : (
                <div className='profile-container'>
                    <img src='https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/29513199_1623533547731278_723604520850528403_n.jpg?_nc_cat=0&oh=45b11209c957f60e70d9622b5ef64837&oe=5B6AA7CF' alt='' />
                    <h1>{userDetails.realName}</h1>
                    <h2>{userDetails.work}</h2>
                    <h2>{userDetails.email}</h2>
                </div>
            )

        //console.log(userDetails.userName);

        return (
            <div>
                {detailsContent}
            </div>

        );
    }

}

export default Profile