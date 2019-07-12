import React, { useState, useEffect } from "react"
import { Menu } from "./menu";

export function Home() {
    const [menus, setMenus] = useState(["text", "menu", "string"])
    useEffect(() => {
        fetch('http://localhost:7000/')
            .then(r => r.json())
            .then(data => {
                setMenus(data)
            })
    }, [])

    return <div>
        <p>Home, sweet home!</p>
        <Menu menus={menus}></Menu>
    </div>
}