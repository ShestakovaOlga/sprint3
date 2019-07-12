import React, { useState } from "react";
import CityList from "./CityList";

export default class Ciudades extends React.Component {
    constructor() {
        super()
        this.state = {
            img: ""
        }
    }

    render() {
        return (
            <div>
                <CityList setImg={(url) => {
                    this.setState({
                        img: url
                    })
                }}></CityList>
                <img src={this.state.img}></img>
            </div>
        )
    }
}