import React from 'react'
import { useState, useEffect } from 'react'

import ImageCard from './ImageCard'

export default function ImageList({data}) {
    let [imageList, setImageList] = useState([])

    useEffect(() => {
        fetchImageList()
    }, [])

    function fetchImageList() {
        fetch("https://image-mock-data.firebaseio.com/images.json")
            .then(res => res.json())
            .then((result) => {
                setImageList(result)
            })
    }
    return (
        <div className="row">
        {
            imageList.map((item, index) => {
                return <ImageCard key={index} title={ item.title } description={ item.description } imageURL={item.imageURL} />
            })  
        }
        </div>
    )
}
