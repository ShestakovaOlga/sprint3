import React from "react"

const items = [
    {
        name: "Cereales con chocolate",
        description: "Cereales rellenos de chocolate",
        quantity: 2,
        category: "Cereales",
        price: 5
    },
    {
        name: "Hamburguesa con queso",
        description: "Hamburguesa rica y saludable",
        quantity: 1,
        category: "Fast-food",
        price: 15
    },
    {
        name: "Agua mineral",
        description: "Agua de un charco del Himalaya",
        quantity: 2,
        category: "Bebida",
        price: 5
    }
];

function Item(props) {
    return <div style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid green",
        color: "#566573",
    }}>
        <div>{props.quantity}</div>
        <h2 style={{
            borderBottom: "1px solid #D7DBDD  ",
            color: "#D35400",
        }}>Name: {props.name}</h2>
        <p>Description: {props.description}</p>
        <p>Category: {props.category}</p>
        <p>Price: {props.price}</p>
    </div>
}

function ItemGuapo(props) {
    return props.children
}

export function List() {
    return <div>
        {items.map(item => <ItemGuapo>
            <Item {...item}></Item>
        </ItemGuapo>)}
    </div>
}