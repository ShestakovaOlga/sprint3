import React from "react"

export function Half(props) {
    return <div style={{
        width: "50%",
        height: "100%",
        backgroundColor: "#FDEDEC",
    }}>
        {props.children}
    </div>
}

