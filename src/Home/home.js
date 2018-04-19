import React, { Component } from 'react';
import { fakeAuth } from '../Login/login'
import { Link } from "react-router-dom";
import './home.css';

class Home extends Component {

    render() {
        const hello = fakeAuth.isAuthenticated ?
            (
                <div className='authen-complete'>
                    <h1>ยินดีต้อนรับเข้าสู่ระบบคุณ {fakeAuth.userName} </h1> <br />
                    <Link to='/createpost'>สร้างเรื่องราวใหม่</Link>
                </div>
            ) :
            (
                <div className='authen-complete'>
                    <h1>เข้าสู่ระบบเพื่อสร้างเรื่องราวใหม่</h1>
                </div>
            );
        const newsTitle = 'เปิดเสรีทรงผมนักเรียนไทย';
        const news = (
            <div className='news'>
                <Link className='title' to={`/post/${newsTitle}`}>เปิดเสรีทรงผมนักเรียนไทย</Link>
                <div className='preview'>
                    เดิมทรงผมนักเรียนไทย เป็นกฎเพื่อใช้ปลูกฝังการเชื่อฟังคำสั่ง
                    ปลูกฝังอำนาจนิยม ซึ่งทำให้เด็กไทยไม่รู้จักการรักษาสิทธิของตนเอง
                    เพราะถ้าหากเราเป็นประเทศประชาธิปไตยแล้ว ก็ควรให้นักเรียนได้รักษาสิทธิ
                    โดยสามารใช้สิทธิของตนเองได้อย่างเต็มรูปแบบ
                </div>
                <Link className='extra' to={`/post/${newsTitle}`}> เพิ่มเติม...</Link>
                <div className='user-post-name'>
                    Siwakorn Ruenrit
                </div>
            </div>
        );
        const hotTopic = (
            <div className='hot-news'>
                <div className="left-half">
                    <img className='post-image' src='https://assets.change.org/photos/2/ab/gf/gEABgFWkjGDxumE-800x450-noPad.jpg?1522729038' alt='' />
                </div>
                <div className="right-half">
                    <Link className='title' to={`/post/${newsTitle}`}>เปิดเสรีทรงผมนักเรียนไทย</Link>
                    <p>
                        เดิมทรงผมนักเรียนไทย เป็นกฎเพื่อใช้ปลูกฝังการเชื่อฟังคำสั่ง
                        ปลูกฝังอำนาจนิยม ซึ่งทำให้เด็กไทยไม่รู้จักการรักษาสิทธิของตนเอง
                        เพราะถ้าหากเราเป็นประเทศประชาธิปไตยแล้ว ก็ควรให้นักเรียนได้รักษาสิทธิ
                        โดยสามารใช้สิทธิของตนเองได้อย่างเต็มรูปแบบ
                    </p>
                    <div className='user-post-name'>
                        Siwakorn Ruenrit
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                <div className='home-container'>
                    {hello}
                    <h2>เรื่องเด่นช่วงนี้...</h2>
                    {hotTopic}
                    <h2>เรื่องราวล่าสุด...</h2>
                    {news}
                    {news}
                    {news}
                    {news}
                </div>
            </div>
        );
    }
}

export default Home;