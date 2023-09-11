import React, { Component } from "react";

class DisplayNumber extends Component {
    render() {
        return (
            <div>
                <p>Number : {this.props.numberId}</p>
            </div>
        );
    }
}

export default DisplayNumber;