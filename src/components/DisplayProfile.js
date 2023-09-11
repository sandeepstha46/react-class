import React, { Component } from "react";
import DisplayEmail from "./DisplayEmail";

class DisplayProfile extends Component {
    render() {
        return (
            <div>
                <p>Name : {this.props.profileInformation.name}</p>
                <DisplayEmail emailId={this.props.profileInformation} />
            </div>
        );
    }
}

export default DisplayProfile;