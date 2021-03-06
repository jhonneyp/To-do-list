import React from 'react'
import '../Styles/TodoSearch.css'
import { TodoContext } from '../TodoContext/todoContext'

function TodoSearch() {

    const {searchValue,
        setSearchValue
    } = React.useContext(TodoContext) 

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
    }

    return(
        <input 
        className="TodoSearch" 
        placeholder="write something here" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch}
