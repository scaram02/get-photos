import React from 'react'
import {useState, useEffect} from 'react'

const PhotoStream = () => {




const blank = { query: ''}
const [query, setQuery] = useState(blank)

const handleInputChange = (event) => {
    const {name, value} = event.target

    setQuery({...query, [name]: value})
}



    return (
        <div>
      <label>search</label>
      <input 
      type="text" 
      name="query" 
      value={query.query}
      onChange={handleInputChange} />
        </div>
    )
}

export default PhotoStream
