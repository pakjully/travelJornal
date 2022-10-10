import React from 'react'
import ImgCards from '../Images/Fill 219.png'

export default function Cards ({item}) {
    console.log(item)
    return (
        <div className="cards-container">
            <div>
                <img className="cards-image" src={item.imageUrl}></img>
            </div>
            <div className="cards-description">
                <img src={ImgCards}></img>
                <span className="cards-country">{item.location}</span>
                <a className="cards-maps" href={item.googleMapsUrl}>View on Google Maps</a>
                <h1>{item.title}</h1>
                <h2><span>{item.startDate}</span> - <span>{item.endDate}</span></h2>
                <p>{item.description}</p>
            </div>
        </div>
    )
}