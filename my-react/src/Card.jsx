import React from "react"
import { render } from "react-dom"
import moment from 'moment'
import 'moment/locale/es'
import fotoAvatar from '../1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export function Card(props) {
    const img = <img src={fotoAvatar} style={{
        width: 100,
        height: 100,
        borderRadius: 9999,
    }} />

    return <div style={{
        backgroundColor: 'rgba(255,0,0,0.5)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        width: 400,
        height: 600,
    }}>
        <div style={{
            display: 'flex',
        }}>
            {img}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 20,
            }}>
                <h2>{props.name}</h2>
                <span>{moment().format('DD [de] MMMM [del] YYYY')}</span>
            </div>
        </div>
        <div style={{
            marginTop: 20,
            marginBottom: 20,
        }}><span>Maria es de un pueblo situado al norte de Brasil.
                Todavía adolescente, viaja a Río de Janeiro, donde conoce a un empresario que le ofrece un buen trabajo en Ginebra.
                Allí, Maria sueña con encontrar fama y fortuna, pero acabará ejerciendo la prostitución.
                El aprendizaje que extraerá de sus duras experiencias modificará para siempre su actitud ante sí misma y ante la vida...</span></div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: 60,
        }}>
            <span style={{
                color: 'rgba(66, 73, 73, 1)'
            }}>Leer más...</span>
            <div>
                <span style={{
                    marginRight: 5,
                }}>37</span>
                <FontAwesomeIcon color="red" icon={faHeart}></FontAwesomeIcon>
            </div>
        </div>
    </div>
}