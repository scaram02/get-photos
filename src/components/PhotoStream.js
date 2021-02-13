import React from 'react'
import {useState} from 'react'
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
    console.log("Your query: ", query.query)


    var key = process.env.REACT_APP_FLICKR_KEY
    var flickrApi = ` https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query.query}&format=json&nojsoncallback=1`
    
    console.log("I'm the api", flickrApi)
   fetch(flickrApi)
   .then((res) => {
       return res.json()
   })
   .then((data => {
       setPhotos(data)
   }))
}


const photoList = query.query && photos.photos.photo.map((pic) => {
    return <img key={pic.id} src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_w.jpg` || `https://forums.codemasters.com/uploads/monthly_2020_03/image.png.f8c83b98a2250b117a112bcfb92ca287.png`} alt={pic.title}/>
}) 


    return (
        <div>
    <form onSubmit={handleSubmit}>
      <label>search</label>
      <input 
      type="text" 
      name="query" 
      value={query.query}
      onChange={handleInputChange} />
      <button>Get photos!</button>
      </form>
     {photoList}
        </div>
    )
}

export default PhotoStream
