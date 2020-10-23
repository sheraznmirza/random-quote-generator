import React from 'react';
import './App.css';
import {quoting} from './database'
import {colors} from './database'

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomIndex: Math.floor(Math.random() * quoting.length),
            randomColor: Math.floor(Math.random() * colors.length)
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const temp = this.state.randomIndex;
        let newRandomIndex = Math.floor(Math.random() * quoting.length);
        while (temp === newRandomIndex) {
            newRandomIndex = Math.floor(Math.random() * quoting.length);
        }
        this.setState(
            {
                randomIndex: newRandomIndex
            });
    }
    render() {
        const changingColor = {
            color: this.state.randomColor
        }
        return (
            <div id="quote-box">
                <h1 id="text" style={changingColor}>{quoting[this.state.randomIndex].quote}</h1>
                <h4 id="author">- {quoting[this.state.randomIndex].author}</h4>
                <a id="tweet-quote" href="twitter.com/intent/tweet"><i class="fa fa-twitter-square"></i></a>
                <button id="new-quote" onClick={this.handleClick}>New quote</button>

            </div>
        );
    }
}

export default QuoteMachine;
