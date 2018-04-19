import React from 'react';
import { CallFromCreatePost } from '../Post/post';
import './createpost.css';

class CreatePost extends React.Component {

    constructor() {
        super();
        this.state = {
            postTitle: '',
            postContent: '',
            imageURL: '',
            post: false,
        }
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageURLChange = this.handleImageURLChange.bind(this);
    }

    handleContentChange(event) {
        this.setState({ postContent: event.target.value });
    }

    handleTitleChange(event) {
        this.setState({ postTitle: event.target.value });
    }
    handleImageURLChange(event) {
        this.setState({ imageURL: event.target.value });
    }

    handleSubmit() {

        if (this.state.postTitle === '' || this.state.postContent === '') {
            return;
        }

        console.log(this.state.postTitle, this.state.postContent);
        this.setState({
            post: true,
        })
    }

    render() {
        if (this.state.post) {
            return (
                <CallFromCreatePost {...this.state} />
            );
        }

        return (
            <div className='create-post-container'>
                <div className='post-title'>
                    <input value={this.state.postTitle} onChange={this.handleTitleChange} type='text' placeholder='ใส่หัวข้อสำหรับโพสต์ของคุณ'></input>
                </div>
                <div className='post-content'>
                    <textarea value={this.state.postContent} onChange={this.handleContentChange} placeholder='ใส่เนื้อหาของคุณ...' />
                </div>
                <div className='post-image'>
                    <input value={this.state.imageURL} onChange={this.handleImageURLChange} placeholder='ใส่ที่อยู่ของรูปภาพ (ตัวอย่าง https://www.bobogago.com/img/ez.png)' />
                </div>
                <button onClick={this.handleSubmit} className='submit-post'>โพสต์</button>
            </div>
        );
    }
}

export default CreatePost;