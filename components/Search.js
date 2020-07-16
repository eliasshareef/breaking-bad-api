import React, {useState} from 'react'

const Search = ({getSearchString}) => {
    const [inputValue, setInputValue] = useState('');
    const onChangeHandler = (val) =>{
        console.log(val);
        setInputValue(val);
        getSearchString(val);
    }
    return (
        <div className='search'>
            <form>
            <input 
                type='text' 
                className='form-control' 
                placeholder='search character'
                value={inputValue}
                onChange={e => onChangeHandler(e.target.value)}
            />
            </form>
        </div>
    )
}

export default Search
