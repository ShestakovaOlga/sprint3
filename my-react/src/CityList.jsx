import React, { useState } from "react";

const urls = {
    Madrid: "https://startupscolaborativas.com/wp-content/uploads/2019/03/PEH-Madrid-e1553588963216.jpg",
    Barcelona: "https://avisassets.abgemea.com/.imaging/flexibleIntroLarge/dam/DMS/global/hg2-images/intros/barcelona/Barcelona_at_golden_hour_Credit_iStock_Eloi_Omella.jpg.jpg",
    Tokio: "https://hjapon.com/wp-content/uploads/2018/02/citywallpaperhdcom-188.jpg",
    Chicago: "https://pix10.agoda.net/hotelImages/2452374/0/4eaca668125b177fc140481b1cfd8a73.jpg?s=1024x768",
    Amsterdam: "https://www.rumbo.es/viajes/img/holanda/amsterdam.jpg"
}

export default class CityList extends React.Component {
    render() {

        return (
            <select onChange={(event) => {
                this.props.setImg(urls[event.target.value])
            }}>
                <option value="Madrid">Madrid</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Tokio">Tokio</option>
                <option value="Chicago">Chicago</option>
                <option value="Amsterdam">Amsterdam</option>
            </select >
        )
    }
}
