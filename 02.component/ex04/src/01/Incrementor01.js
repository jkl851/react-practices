import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            val: this.props.begin
        }
    }

    onClickButton(e) {
        // this.state.value = this.state.value + this.props.step; 사용하지 말 것!
        this.setState({
            val: this.state.val + this.props.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                
            </div>
        );
    }
}