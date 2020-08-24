import React from 'react'

export default function TitleForm({ onChangeTitle }) {
    function handleOnChange(e) {
        console.log(e.target.value)
        onChangeTitle(e.target.value)
        
    }
    return (
        <div>
            Change Title: <input onChange={handleOnChange} />
        </div>
    )
}
