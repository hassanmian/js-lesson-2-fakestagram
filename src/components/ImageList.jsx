import React from 'react'

import ImageCard from './ImageCard'

export default function ImageList({data}) {
    
    return (
        <div className="row">
        {
            data.map((item, index) => {
                return <ImageCard key={index} title={ item.title } description={ item.description } imageURL={item.imageURL} />
            })  
        }
        </div>
    )
}
