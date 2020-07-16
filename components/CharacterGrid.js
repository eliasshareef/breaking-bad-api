import React from 'react'
import CharacterItem from './CharacterItem';

const CharacterGrid = ({isLoading, items}) => {
    if(isLoading){
        return(
            <div>LOADING......................</div>
        )
    }
    return (
        <div className='cards'>
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </div>
    )
}

export default CharacterGrid
