import React from 'react'

export default function ToDo(props) {
    const{idx,todo}=props
    return (
        <li key={idx}>{todo}</li>
    )
}
