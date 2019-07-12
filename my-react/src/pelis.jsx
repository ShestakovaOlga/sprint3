import React, { useState } from "react"



export function PeliInfo() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [select, setSelect] = useState("");
    const [imagen, setImagen] = useState("");

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        marginBottom: 20,
    }}>
        <div style={{
            marginBottom: 20,
        }}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                onInput={(ev) => {
                    setName(ev.target.value)
                }}
            />
        </div>

        <textarea style={{
            marginBottom: 20,
        }} onInput={(event) => {
            setText(event.target.value)
        }}>
        </textarea>
        <select onChange={(e) => {
            setSelect(e.target.value)
        }}>
            <option value="Drama">Drama</option>
            <option value="Comedia">Comedia</option>
            <option value="Infantil">Infantil</option>
        </select>
        <input
            id="img"
            type="file"
            onChange={(event) => {
                var fr = new FileReader();
                fr.onload = function () {
                    setImagen(fr.result)
                }
                fr.readAsDataURL(event.target.files[0]);
            }}
        />
        <div>{name}</div>
        <div>{text}</div>
        <div>{select}</div>
        <img src={imagen} style={{
            width: 150,
            height: 150,
        }}></img>
    </div >
}