import React from 'react';
import './App.css';
import {quoting} from './database'
import {colors} from './database'
import Button from 'react-bootstrap/Button'

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomIndex: Math.floor(Math.random() * quoting.length),
            randomColor: Math.floor(Math.random() * colors.length)
        }
        this.handleClick = this.handleClick.bind(this);
        this.randomize = this.randomize.bind(this);
    }

    randomize() {
        const tempIndex = this.state.randomIndex;
        const tempColor = this.state.randomColor;
        let newRandomIndex = Math.floor(Math.random() * quoting.length);
        let newRandomColor = Math.floor(Math.random() * colors.length);
        while (tempIndex === newRandomIndex) {
            newRandomIndex = Math.floor(Math.random() * quoting.length);
        }
        while (tempColor === newRandomColor) {
            newRandomColor = Math.floor(Math.random() * colors.length);
        }
        this.setState(
            {
                randomIndex: newRandomIndex,
                randomColor: newRandomColor
            });
    }

    handleClick() {
        this.randomize();
    }
    render() {
        const changingColor = {
            color: colors[this.state.randomColor]
        }
        return (
            <div id="quote-box">
                <h1 id="text" className="text-fade" style={changingColor} key={quoting[this.state.randomIndex].quote}>  {quoting[this.state.randomIndex].quote}</h1>
                <h4 id="author" className="text-fade" style={changingColor} key={quoting[this.state.randomIndex].author}>- {quoting[this.state.randomIndex].author}</h4>
                <a id="tweet-quote" href="twitter.com/intent/tweet"><i class="fa fa-twitter"></i></a>
                <Button variant="outline-dark" id="new-quote" onClick={this.handleClick}>New quote</Button>
            </div>
        );
    }
}



export default QuoteMachine;
