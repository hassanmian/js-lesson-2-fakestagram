import React from 'react'
import { useState, useEffect } from 'react'
import TitleForm from './TitleForm'

export default function CardItemDetail({title, description, imageURL}) {
  let [customTitle, setCustomTitle] = useState(null)

  return (
    <div className="col-xl-12 mt-3">
      <div className="card">
        <img className="card-img-top" src={ imageURL } alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{ customTitle ? customTitle : title }</h5>
          <p>
            { description }
          </p>
          <TitleForm onChangeTitle={setCustomTitle}/>
        </div>
      </div>
    </div>
  )
}
