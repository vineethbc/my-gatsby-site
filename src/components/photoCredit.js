import React from 'react'
import styled from "styled-components"

const Credit = styled.p`
    font-size: .8rem;
`

const PhotoCredit = ({link, text}) =>  {
    return (
        <Credit>
            Photo Credit:{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
            </a>  
        </Credit>
    )
}

export default PhotoCredit