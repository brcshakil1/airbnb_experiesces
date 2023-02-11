import React from 'react';
import './Card.css';


const Card = (props) => {
    let badgeText = '';
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
        badgeText = 'ONLINE'
    }
    console.log(props)
    return (
        <div className='card'>
            <div className="image-btn">
                <img src={props.coverImg} alt="" />
                {
                    badgeText && <button className='btn'>{badgeText}</button>
                }
            </div>
            <div className="stats">
                <img className='star' src={props.stats.star} alt="" />                
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) . </span>
                <span className="gray"> {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    );
};

export default Card;