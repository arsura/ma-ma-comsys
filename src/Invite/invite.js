import React from 'react';
import './invite.css';

class ShowMiniProfile extends React.Component {
    render() {

        //console.log(this.props.user.length);
        const userList = this.props.user;

        return (
            <div>
                {
                    userList.map((value, index) => {
                        return (
                            <div key={index + value} className='show-mini-profile'>
                                <img src={value.imgSrc} alt='' />
                                <div className='info-details'>
                                    <div className='real-name'>{value.realName}</div>
                                    <div className='address'>{value.address}</div>
                                    <div className='ability'><i>สนใจใน</i>{value.interest}</div>
                                    <button className='invite-people'>เชิญชวน</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

class Invite extends React.Component {

    constructor() {
        super();
        this.state = {
            showInvite: false,
            showSearchPeople: false,
            searhPeopleStack: [],
        }
        this.searchPeople = this.searchPeople.bind(this);
    }

    searchPeople() {
        this.setState({
            showSearchPeople: true
        })
    }

    render() {

        const userList = [
            {
                realName: 'Siwakorn Ruenrit',
                address: 'พิษณุโลก, ประเทศไทย',
                interest: 'เทคโนโลยี, การเมือง, การศึกษา',
                imgSrc: 'https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/29513199_1623533547731278_723604520850528403_n.jpg?_nc_cat=0&oh=45b11209c957f60e70d9622b5ef64837&oe=5B6AA7CF'
            },
            {
                realName: 'Boonsita Pornin',
                address: 'พิษณุโลก, ประเทศไทย',
                interest: 'เนสซีมีจริงไหม?',
                imgSrc: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-9/21078391_1290794677698526_6719247968105344770_n.jpg?_nc_cat=0&oh=af079eb6512dcfa7c9022fdeeace3e75&oe=5B5CA2DF'
            },
            {
                realName: 'Khititach Kamjohn',
                address: 'อุทัยธานี, ประเทศไทย',
                interest: 'เมื่อไหร่จะเลือกตั้ง?',
                imgSrc: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-9/22115_896427913733697_5072256802379462090_n.jpg?_nc_cat=0&oh=4d4bb3dd4ad7251972ee0eb546550755&oe=5B977062'
            },
            {
                realName: 'Kanchanaporn Kusonchotikul',
                address: 'จันทบุรี, ประเทศไทย',
                interest: 'เจ้าแอฟ เจ้าแอฟ',
                imgSrc: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-9/12933053_1348310211851100_1830490015496654564_n.jpg?_nc_cat=0&oh=f66e60c90b18a06c3cbdf4ae92b50f2e&oe=5B53CC3C'
            },
            {
                realName: 'Laddawan Pakpraw',
                address: 'เพชรบูรณ์, ประเทศไทย',
                interest: 'ของกิน ?',
                imgSrc: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-9/20914315_499021423777739_210026180549469871_n.jpg?_nc_cat=0&oh=a9b9c2fee7c977475a879b9732f1fc6a&oe=5B500F89'
            },
            {
                realName: 'Chanisorn Wutthinatenetiruk',
                address: 'พิษณุโลก, ประเทศไทย',
                interest: 'Dota2',
                imgSrc: 'https://scontent.fbkk2-3.fna.fbcdn.net/v/t1.0-9/12247004_965778210126949_7717152322951308050_n.jpg?_nc_cat=0&oh=2b9853e71bf04ec695b6ecaac1bb507e&oe=5B60CD75'
            },
        ]

        const clickToShow = this.state.showInvite ?
            (
                <div className='invite-container'>
                    <h2>เชิญชวนผู้คนเพื่อเข้าร่วมกับกิจกรรมนี้</h2>
                    <div className="search-container">
                        <input type='text' placeholder='ใส่ชื่อผู้ใช้ ความถนัด หรือที่อยู่...' />
                        <button onClick={this.searchPeople}>ค้นหา</button>
                    </div>
                    {
                        this.state.showSearchPeople ?
                            (
                                <ShowMiniProfile user={userList} />
                            ) :
                            (
                                <div className='search-notfound'>
                                    ไม่พบผลลัพธ์สำหรับการค้นหา...
                            </div>
                            )
                    }
                </div>
            ) :
            (
                <div className='invite-button'>
                    <button type='submit' onClick={() => { this.setState({ showInvite: true }) }} >เชิญชวนผู้คนเพื่อเข้าร่วมกับกิจกรรมนี้</button>
                </div>
            );


        return (
            <div>
                {clickToShow}
            </div>
        );
    }
}

export default Invite;