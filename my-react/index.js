import React, { useState } from "react"
import { render } from "react-dom"
import moment from 'moment'
import 'moment/locale/es'
import fotoAvatar from './1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Card } from "./src/Card";
import { RandomCat } from "./src/RandomCat";
import { List } from "./src/ejercico1";
import { Half } from "./src/HalfPage";
import { OnionHater } from "./src/odioLaCebolla";
import { PeliInfo } from "./src/pelis";
import CityList from "./src/CityList";
import Ciudades from "./src/ciudades";
import Text from "./src/removeVowels";
import FormText from "./src/formRemoveV";
import { Filtros } from "./src/Directorio";

moment.locale('es')

function App() {
    const [text, setText] = useState("")
    return <div style={{
        width: '100vw',
        height: '100vh',
        display: "flex"
    }}>
        <Text>{text}</Text>
        <FormText setText={(t) => {
            setText(t)
        }}></FormText>
    </div>
}

render(<App></App>, document.querySelector(`#app`))