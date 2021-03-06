import React from 'react'
import { useState } from 'react'

const maximumLikes = 1000

export default function ImageCard({ imageURL, title, description }) {
    function getMaximumLikes() {
        return Math.floor(Math.random()*maximumLikes)
    }
    let [likes, setLikes] = useState(getMaximumLikes())

    function incrementLikes() {
        setLikes(likes+1)
    }
    return (
        <div className="col-xl-4 col-md-6 col-sm-12 mt-3">
            <div className="card">
                <img className="card-img-top" src={imageURL} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={imageURL} rel="noopener noreferrer" target="_blank">Download Image</a>
                    <button onClick={incrementLikes} className="btn btn-primary btn-block">Like <span role="img" aria-label="heart">♥️</span> ({likes})</button>
                </div>
                
            </div>
        </div>
    )
}
