import React from 'react';
import './App.css';

const quoting = [
    {
        quote: "blah blah blegh",
        author: "Bobby Poppycock"
    },
    {
        quote: "whatever you see is not real",
        author: "benjamin dickwad"
    },
    {
        quote: "I am too lazy to make more quotes for this shit",
        author: "Sheraz Mirza"
    },
    {
        quote: "This is a new quote",
        author: "Sheraz Mirza"
    },
    {
        quote: "follow your dreams, son",
        author: "Filthy Frank"
    },
    {
        quote: "wat de feuk",
        author: "Ayesha Imtiaz"
    },
    {
        quote: "Death Stranding is a masterpiece",
        author: "Sheraz Mirza"
    },
    {
        quote: "Never make a promise when you are horny",
        author: "Sheraz Mirza from the future"
    },
    {
        quote: "Gappz time",
        author: "Samiah Bilal"
    },
    {
        quote: "the final quote",
        author: "Sheraz Mirza"
    }
];

class QuoteMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomIndex: Math.floor(Math.random() * quoting.length)
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
        return (
            <div id="quote-box">
                <h1 id="text">"{quoting[this.state.randomIndex].quote}</h1>
                <h4 id="author">- {quoting[this.state.randomIndex].author}</h4>
                <button id="new-quote" onClick={this.handleClick}>Dis a button</button>
                <a id="tweet-quote" href="twitter.com/intent/tweet">I'm gonna be a twitter icon</a>

            </div>
        );
    }
}

export default Quote;
