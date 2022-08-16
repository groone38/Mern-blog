import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import classes from './Search.module.scss'

const Search = () => {
  return (
    <div className={classes.search}>
        <input type="text" />
        <AiOutlineSearch/>
    </div>
  )
}

export default Search