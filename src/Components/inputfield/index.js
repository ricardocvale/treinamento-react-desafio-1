import React from 'react'
import { InputFieldStyled } from './styles'

export default function InputField({ id, type = 'text', required = false, placeholder, value, onChangeValue }) {

    const changeInputValue = (evento) => {
        onChangeValue(evento.target.value)
    }

    return (
        //TODO: alterar para div?
        <InputFieldStyled
            required={required}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={changeInputValue}
        />
    )
}