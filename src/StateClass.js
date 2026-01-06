
import React, { Component } from 'react';

export default class StateClass extends Component {
    constructor(){
        super();
        this.state={data:"State in Class Component"};
    }
    render() {
        return (
            <div>
                <h3>{this.state.data}</h3>               
            </div>
        );
    }

}