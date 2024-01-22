import React from 'react'
import { SubmitButton } from './styles'

export default function Button({text}) {
    return (
        <SubmitButton type='submit'>
            <img src='./img/plane.svg' alt="plane" />
            {text}
        </SubmitButton>
    )
}