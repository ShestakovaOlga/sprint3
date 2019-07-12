import React, { useState } from "react"

export function Menu(props) {
    return <div>
        {props.menus && props.menus.map(m => <div key={m}>
            {m}
        </div>)}
    </div>

}