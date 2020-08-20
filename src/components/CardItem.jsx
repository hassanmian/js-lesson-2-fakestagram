import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CardItem({ id, title, description, imageURL }) {
  let [isLiked, setIsLiked] = useState(false)
  let [likes, setLikes] = useState(100)
  let [showDescription, setShowDescription] = useState(false)

  function handleClick() {
    // isLiked = true
    setIsLiked(true)
    setLikes(likes + 1)
  }

  function renderDescription() {
    if(showDescription) {
      return <p className="card-text">{description}</p>
    } else {
      return ""
    }
  }

  function renderShowMore() {
    if(showDescription == false) {
      return <p><a onClick={() => setShowDescription(true)}>Read More</a></p>
    } else {
      return ""
    }
  }

  function renderLikeButton() {
    const message = isLiked ? "Du har gillat" : "Gilla"
    return (
      <button onClick={handleClick} className="btn btn-primary btn-block">
        {message}  
      </button>
    )
  }

  return (
    <div className="col-xl-4 col-md-6 col-sm-12 mt-3">
      <div className="card">
        <img className="card-img-top" src={imageURL} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          {renderShowMore()}
          {renderDescription()}
          
          <a href={imageURL} rel="noopener noreferrer" target="_blank">Download Image</a>

          {renderLikeButton()}
          <Link to={`/image/${id}`}>Go to image detail</Link>
        </div>
      </div>
    </div>
  )
}