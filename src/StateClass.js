
import React, { Component } from 'react';

export default class StateClass extends Component {
    constructor(){
        super();
        this.state={data:"hello"};
    }
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                
            </div>
        );
    }

}