import React from 'react'

class CreatePost extends React.Component {

    constructor() {
        super();
        this.state = {
            postTitle: '',
            postContent: '',
        }
    }

    handleContentChange(event) {

    }

    handleTitleChange(event) {
        
    }

    render() {
        return (
            <div className='create-post-container'>
                <div className='post-title'>
                    <input value={this.state.postTitle} onChange={this.handleTitleChange} type='text' placeholder='ใส่หัวข้อสำหรับโพสต์ของคุณ'></input>
                </div>
                <div className='post-content'>
                    <textarea value={this.state.postContent} onChange={this.handleContentChange} placeholder='ใส่เนื้อหาของคุณ' />
                </div>
                <button>โพสต์</button>
            </div>
        );
    }
}

export default CreatePost;