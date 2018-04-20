import React from 'react'
import './poll.css'

class Poll extends React.Component {

    constructor() {
        super();
        this.state = {
            pollChoice: [],
            insertChoice: false,
            choice: '',
            choiceCount: [],
            isChecked: [],
            sendComplete: false,
        }
        this.createChoice = this.createChoice.bind(this);
        this.handleChoiceChange = this.handleChoiceChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePollSubmit = this.handlePollSubmit.bind(this);
        this.handleIsChecked = this.handleIsChecked.bind(this);
    }

    createChoice() {
        //console.log('create-poll');
        this.setState({
            insertChoice: !this.state.insertChoice,
        })
    }

    handleChoiceChange(event) {
        this.setState({
            choice: event.target.value
        })
    }

    handleSubmit() {
        if (this.state.choice === '') {
            return;
        }

        let index = this.state.pollChoice.length;
        this.setState({
            isChecked: this.state.isChecked.concat(false),
            pollChoice: this.state.pollChoice.concat(
                <div className='poll-choice'>
                    <input type='checkbox' checked={this.state.isChecked[index]} id={'box' + this.state.pollChoice.length} onChange={() => this.handleIsChecked(index)}/>
                    <label htmlFor={'box' + this.state.pollChoice.length}>{this.state.choice}</label>
                </div>
            ),
            choice: '',
            choiceCount: this.state.choiceCount.concat(0),
        })
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    handlePollSubmit() {
        let newchoiceCount = this.state.choiceCount.slice();
        let hasChecked = false;

        for (let i = 0; i < this.state.isChecked.length; i++) {
            if (this.state.isChecked[i]) {
                newchoiceCount[i] = newchoiceCount[i] + 1;
                hasChecked = true;
            }
        }

        if (hasChecked === false) return;

        this.setState({
            choiceCount: newchoiceCount,
            insertChoice: false,
            sendComplete: true,
        })
    }

    handleIsChecked(index) {
        //console.log(index);
        let newIsChecked = this.state.isChecked.slice();
        newIsChecked[index] = !newIsChecked[index];
        this.setState({
            isChecked: newIsChecked,
            insertChoice: false,
        })
        //console.log(this.state.isChecked);
    }

    render() {
        const detailsContent =
            (
                <div className='poll-container'>
                    {
                        this.state.pollChoice.map((value, index) => {
                            return (
                                <div key={index + value}>
                                    {value}
                                    <div className='poll-score'>
                                        {this.state.choiceCount[index]} ที่คนเห็นด้วย
                                    </div>
                                </div>
                            );
                        })
                    }
                    {this.state.insertChoice ? (
                        <div>
                            <input type='text' value={this.state.choice}
                                onChange={this.handleChoiceChange}
                                onKeyPress={this.handleKeyPress}
                                placeholder="ใส่ตัวเลือก..."></input>
                        </div>
                    ) : ('')}
                    {this.state.insertChoice ? (
                        <div>
                            <button className='insert-button' onClick={this.handleSubmit}>เพิ่ม</button>
                            <button className='cancel-button' onClick={this.createChoice}>ยกเลิก</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.createChoice}>
                                    {
                                        this.state.pollChoice.length ? ('สร้างตัวเลือกเพิ่มเติม') : ('สร้างโพล')
                                    }
                                </button>
                            </div>
                        )}

                    {this.state.sendComplete ? ('') : (<button className='submit-button' onClick={this.handlePollSubmit}>ตอบโพล</button>)}
                </div>
            );

        return (
            <div>
                {detailsContent}
            </div>
        );
    }
}

export default Poll;