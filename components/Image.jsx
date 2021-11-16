import React from "react"

function Image () {
  const [image, setImage] = React.useState({
        quote: "",
    })

  const [backgroundImage, setBackgroundImage] = React.useState("")
  
  // gets the image from unsplash upon click 
  function getImage() {
    const image = `https://source.unsplash.com/collection/583204/random=${Math.random()}`
    setBackgroundImage(image)
    console.log("click") 
  }
  // displays the typed quote 
  function handleChange(event) {
        const {name, value} = event.target
        setImage(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
  }

  return( 
    <div>
    <div className="form">
    <input  type="text" 
            name="quote"
            value={image.quote}
            onChange={handleChange}
            />
    <button onClick={getImage}>Get New Image</button>
    </div>
      <div className="image-container">
      <img src={backgroundImage} onLoad={(event) => event.target.style.display = 'inline-block'}/>
      <h2 className="image-quote">{image.quote}</h2>
      </div>
    </div>
  )
}

export default Image