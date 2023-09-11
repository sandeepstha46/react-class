import React, { Component } from "react";
import DisplayNumber from "./DisplayNumber";

class DisplayEmail extends Component {
    render() {
        return (
            <div>
                <p>Email id : {this.props.emailId.email}</p>
                <DisplayNumber numberId={this.props.emailId.number} />;
            </div>
        );
    }
}

export default DisplayEmail;