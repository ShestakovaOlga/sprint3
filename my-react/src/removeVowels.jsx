import React, { useState } from "react";

export default class Text extends React.Component {

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}
