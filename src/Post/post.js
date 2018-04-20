import React from 'react';
import { Link } from 'react-router-dom';
import { fakeAuth } from '../Login/login';
import Poll from '../Poll/poll';
import './post.css';

const Post = ({ match }) => (
    <div className='post-container'>
        <div className='title'>
            <h1>{match.params.id}</h1>
        </div>
        <img className='post-image' src='https://assets.change.org/photos/2/ab/gf/gEABgFWkjGDxumE-800x450-noPad.jpg?1522729038' alt='' />
        <p>
            <i>เดิมทรงผมนักเรียนไทย</i> เป็นกฎเพื่อใช้ปลูกฝังการเชื่อฟังคำสั่ง  ปลูกฝังอำนาจนิยม ซึ่งทำให้เด็กไทยไม่รู้จักการรักษาสิทธิของตนเอง เพราะถ้าหากเราเป็นประเทศประชาธิปไตยแล้ว ก็ควรให้นักเรียนได้รักษาสิทธิ โดยสามารใช้สิทธิของตนเองได้อย่างเต็มรูปแบบ
            <br /><br />
            ดังนั้น การมีกฎบังคับทรงผม เป็นการทรงเสริมให้ใช้อำนาจโดยมิชอบ  ตัวอย่างคือ ในบางโรงเรียนมีการลงโทษนักเรียนที่ไม่ทำตามระเบียบโดยการ “กล้อนผมนักเรียน”  มีการ “ข่มขู่” หรือ “ทำให้อาย”  ซึ่งการกระทำเหล่านั้นแสดงให้เห็นว่าครู หรือ ผู้ใหญ่ กำลังใช้อำนาจโดยมิชอบกับนักเรียน มองนักเรียนเป็นเพียงเครื่องมือทางการศึกษา ที่จะสร้างผลงานให้กับตนเอง โดยไม่คำนึงถึงสภาพจิตใจ ถือว่าเป็นการดูหมิ่นเหยียดหยาม ศักดิ์ศรีความเป็นมนุษย์อย่างหนึ่ง
            <br /><br />
            ประเด็นต่อมาการที่มีการบังคับทรงผมนักเรียนนั้น เป็นอีกเหตุหนึ่งปัจจัย ที่ทำให้ครู หรือ ผู้ใหญ่ที่ไม่สามารถควบคุมสภาวะอารมณ์ของตัวเอง ได้กระทำในสิ่งที่ไม่ถูกต้องกับนักเรียน ถ้าหากยกเลิกข้อบังคับเรื่องทรงผมนักเรียนได้ ก็จะลดปัญหาการใช้อำนาจโดยมิชอบจากผู้ใหญ่ และ นักเรียนมีสภาวะจิตใจที่ดีมากขึ้นต่อการไปโรงเรียน โดยผมมองว่าสถานศึกษาควรเป็นสถานที่มุ่งเน้นพัฒนาคุณภาพการศึกษา และ พัฒนาจิตใจ ของผู้เรียน
        </p>
        <EntryActivity />
        <CreatePoll />
        <div className='create-by'>สร้างโดย
            <Link to={`/profile/${'siwakorn'}`}><i> Siwakorn Ruenrit  </i></Link>
            {new Date().toLocaleString()}
        </div>
        <br />
        <SocialNetwork />
        <Comment />
    </div>
);

const SocialNetwork = () => (
    <div className='socialnetwork-link'>
        <i>แชร์เรื่องราวไปที่...</i>
        <Link className='facebook-link' to='/'>
            Facebook
        </Link>
        <Link className='twitter-link' to='/'>
            Twitter
        </Link>
    </div>
);

class EntryActivity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            entryCount: 121,
            entryComplete: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toPollPage = this.toPollPage.bind(this);
    }

    handleSubmit() {
        this.setState({
            entryCount: this.state.entryCount + 1,
            entryComplete: true,
        })
    }

    toPollPage() {
        this.setState({
            createPoll: true,
        })
    }

    render() {

        const isAuthen = fakeAuth.isAuthenticated ?
            (
                ''
            ) :
            (
                <div>
                    <input type="text" placeholder="ชื่อ" />
                    <input type="text" placeholder="นามสกุล" />
                    <input type="text" placeholder="อีเมล์" />
                </div>
            )


        return (
            <div className='entry-act'>
                {
                    this.state.entryComplete ?
                        (
                            <div>
                            <h3>ตอนนี้มีผู้เข้าร่วมกิจกรรมแล้ว {this.state.entryCount} คน <br />
                                <i>และคุณเข้าร่วมกับกิจกรรมนี้เรียบร้อยแล้ว</i></h3>
                            </div>
                        ) :
                        (
                            <div>
                                <h3>ตอนนี้มีผู้เข้าร่วมกิจกรรมแล้ว {this.state.entryCount} คน <br />
                                    <i>เพียงเข้าสู่ระบบหรือลงชื่อเพื่อเข้าร่วมกิจกรรม</i></h3>
                                {isAuthen}
                                <button onClick={this.handleSubmit}>ลงชื่อเข้าร่วมกิจกรรม</button>
                            </div>

                        )
                }

            </div>
        );
    }
}

class CreatePoll extends React.Component {

    constructor() {
        super()
        this.state = {
            pollStatus: false,
        }
        this.createPoll = this.createPoll.bind(this);
    }

    createPoll() {
        this.setState({
            pollStatus: true,
        })
    }

    render() {

        if (fakeAuth.isAuthenticated === false) {
            return null;
        }

        if (this.state.pollStatus) {
            return (
                <Poll />
            );
        }

        return (
            <div className='create-poll'>
                <button onClick={this.createPoll}>สร้างโพลสำหรับกิจกรรมนี้</button>
            </div>
        );
    }
}

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            commentData: [
                'ประเด็นต่อมาการที่มีการบังคับทรงผมนักเรียนนั้น เป็นอีกเหตุหนึ่งปัจจัย ที่ทำให้ครู หรือ ผู้ใหญ่ที่ไม่สามารถควบคุมสภาวะอารมณ์ของตัวเอง ได้กระทำในสิ่งที่ไม่ถูกต้องกับนักเรียน ถ้าหากยกเลิกข้อบังคับเรื่องทรงผมนักเรียนได้ ก็จะลดปัญหาการใช้อำนาจโดยมิชอบจากผู้ใหญ่ และ นักเรียนมีสภาวะจิตใจที่ดีมากขึ้นต่อการไปโรงเรียน โดยผมมองว่าสถานศึกษาควรเป็นสถานที่มุ่งเน้นพัฒนาคุณภาพการศึกษา และ พัฒนาจิตใจ ของผู้เรียน'
            ],
            postBy: [
                'Siwakorn Ruenrit',
            ],
            time: [
                new Date().toLocaleString(),
            ],
            like: [
                5,
            ],
            userWhoLiked: [
                {
                    username: [],
                }
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.increaseLike = this.increaseLike.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        //alert('An essay was submitted: ' + this.state.value);
        this.setState({
            commentData: this.state.commentData.concat([this.state.value]),
            value: '',
            postBy: this.state.postBy.concat([fakeAuth.userName]),
            time: this.state.time.concat([new Date().toLocaleString()]),
            like: this.state.like.concat(0),
            userWhoLiked: this.state.userWhoLiked.concat({username: []}),
        })
        //console.log(this.state.commentData);
        event.preventDefault();
    }

    increaseLike(index) {

        for (let i = 0; i < this.state.userWhoLiked[index].username.length; i++) {
            if (this.state.userWhoLiked[index].username[i] === fakeAuth.userName) {

                let newLikeList = this.state.like.slice();
                newLikeList[index] = newLikeList[index] - 1;

                let newUserWhoLiked = this.state.userWhoLiked.slice();
                delete(newUserWhoLiked[index].username[i]);

                this.setState({
                    like: newLikeList,
                    userWhoLiked: newUserWhoLiked,
                })
                return;
            }
        }

        //console.log('like')
        let newLikeList = this.state.like.slice();
        newLikeList[index] = newLikeList[index] + 1;

        let newUserWhoLiked = this.state.userWhoLiked.slice();
        newUserWhoLiked[index].username = newUserWhoLiked[index].username.concat(fakeAuth.userName);
        //console.log(increase);
        this.setState({
            like: newLikeList,
            userWhoLiked: newUserWhoLiked,
        })
        console.log(this.state.userWhoLiked)
    }

    render() {

        return (
            <div className='comment-container'>
                <div className='comment-textarea'>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <textarea value={this.state.value} onChange={this.handleChange} placeholder='คุณมีความคิดเห็นอย่างไรเกี่ยวกับเรื่องนี้...' />
                        </label>
                        <input type='submit' value='แสดงความคิดเห็น' />
                    </form>
                </div>

                <div className='comment-header'>
                    {this.state.commentData.length} ความคิดเห็น
                </div>
                <div className='comment-list'>
                    {
                        this.state.commentData.map((value, index) => {
                            return (
                                <div key={index + value} className='list-item'>
                                    <div className='text-list'>
                                        <div className='title'>
                                            ความคิดเห็นที่ {index + 1}
                                        </div>
                                        <div className='post-by'>
                                            โดย {
                                                fakeAuth.isAuthenticated || index === 0 ? (this.state.postBy[index]) : ('คนพเนจร')} เวลา {this.state.time[index]
                                            }
                                        </div>
                                        <div className='content'>
                                            {value}
                                        </div>
                                        <button className='like' disabled={!fakeAuth.isAuthenticated} onClick={() => this.increaseLike(index)}>
                                            {this.state.like[index]} คนเห็นด้วย
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

class CallFromCreatePost extends React.Component {
    render() {
        return (
            <div className='post-container'>
                <div className='title'>
                    <h1>{this.props.postTitle}</h1>
                </div>
                <img className='post-image' src={this.props.imageURL} alt='' />
                <p>
                    {this.props.postContent}
                </p>
                <EntryActivity />
                <CreatePoll />
                <div className='create-by'>สร้างโดย
                <Link to={`/profile/${'siwakorn'}`}><i> Siwakorn Ruenrit  </i></Link>
                    {new Date().toLocaleString()}
                </div>
                <br />
                <SocialNetwork />
                <Comment />
            </div>
        );
    }
}

export { Post, CallFromCreatePost };