import React from 'react'

const PhotoCredit = ({link, text}) =>  {
    return (
        <p>
            Photo Credit:{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
            </a>  
        </p>
    )
}

export default PhotoCredit