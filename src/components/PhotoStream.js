import React from 'react'
import {useState, useEffect} from 'react'
import '../App.css'

const PhotoStream = () => {




const blank = { query: ''}
const [query, setQuery] = useState(blank)
const [photos, setPhotos] = useState([])


const handleInputChange = (event) => {
    const {name, value} = event.target

    setQuery({...query, [name]: value})
}

const handleSubmit = e => {
    e.preventDefault()
    getPhotos(query.query)
}


const getPhotos = () => {
    var key = process.env.REACT_APP_FLICKR_KEY
    var flickrApi = ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query.query}&format=json&nojsoncallback=1`
    
   fetch(flickrApi)
   .then((res) => {
       return res.json()
   })
   .then((data) => {
       console.log(data)
       const photoList = data.photos.photo.map((pic) => {
            return <img key={pic.id} src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_w.jpg` || `https://forums.codemasters.com/uploads/monthly_2020_03/image.png.f8c83b98a2250b117a112bcfb92ca287.png`} alt={pic.title}/>
        }) 
    setPhotos(photoList)
   })
}







    return (
    <div className="container">
    <div className="search">
    <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      name="query" 
      placeholder="search your favorite tags"
      value={query.query}
      onChange={handleInputChange} />
      <button>Search tags!</button>
      </form>
      </div>
      <div className='image-container'>
          {photos}
     </div>
    </div>
    )
}

export default PhotoStream
