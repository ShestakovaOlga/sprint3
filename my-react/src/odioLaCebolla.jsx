import React, { useState } from "react";
import moment from 'moment'
import 'moment/locale/es'


var green = '#39D1B4';
export function OnionHater() {
    const [background, setBackground] = useState("white");
    const [count, setCount] = useState(0);

    return <div style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: background,
        marginLeft: 15,
    }}>
        <textarea onInput={(event) => {
            if (event.target.value.includes('cebolla')) {
                setBackground(green);
            } else {
                setBackground("gray")
            }
        }}>
        </textarea>
        <select onChange={(event) => {
            alert(`Tu destino es viajar a ${event.target.value}`)
        }}>
            <option value="Madrid">Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Tokio">Tokio</option>
            <option value="Chicago">Chicago</option>
            <option value="Amsterdam">Amsterdam</option>
        </select>
        <div>{moment().format('DD MMMM  YYYY, h:mm:ss a')}</div>


        <div>
            { // Actualiza el título del documento usando la Browser API
                document.title = `You clicked ${count} times`
            });<br />
            <button onClick={() => setCount(count + 1)}>
                Click me
             </button>
        </div>
        );

    </div >
}