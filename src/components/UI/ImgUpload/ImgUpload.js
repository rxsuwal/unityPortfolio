import React from 'react'

const ImgUpload = (props) => {
    return (
        <div>
            <progress value={props.progress} max='100'/> <br/>
            <input type='file' onChange={props.change} accept='image/*'/>
            
        </div>
    )
}

export default ImgUpload
