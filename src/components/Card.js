import React from "react";

export default function Card(props){
    return(
    <section className={props.classes}>
        <div className="card__heading">
            <h3 className="fs-600 clr-head">{props.heading}</h3>
            <p className="fs-400 clr-text">{props.text}</p>
            <img src={props.img} alt={props.alt}/>
        </div>

    </section>
        )

}