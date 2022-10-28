import React from 'react'
import ImgCards from '../Images/Fill 219.png'

export function Card ({item}) {
    const {imageUrl, location, googleMapsUrl, title, startDate, endDate,description} = item
    return (
        <div className="card-container">
            <div>
                <img className="card-image" src={imageUrl}></img>
            </div>
            <div className="card-description">
                <img src={ImgCards}></img>
                <span className="card-country">{location}</span>
                <a className="card-maps" href={googleMapsUrl}>View on Google Maps</a>
                <h1>{title}</h1>
                <h2><span>{startDate}</span> - <span>{endDate}</span></h2>
                <p>{description}</p>
            </div>
        </div>
    )
}