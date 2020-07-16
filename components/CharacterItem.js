import React from 'react'

const CharacterItem = ({item}) => {
    return (
        <div>
            <b>Name : </b>
            <i>{item.name}</i>
        </div>
    )
}

export default CharacterItem
