import React, { useState } from "react";

const vowels = ['a', 'o', 'e', 'i', 'y', 'u']

export default class FormText extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <textarea onInput={(event) => {
                this.props.setText(event.target.value.split('').map(l => {
                    console.log(l, vowels.includes(l));

                    if (vowels.includes(l)) {
                        return 'i'
                    } else {
                        return l
                    }
                }).join(''))
            }}>
            </textarea>
        )
    }
}
