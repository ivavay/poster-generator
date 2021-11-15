import React from "react"

function Image () {
  const [backgroundImage, setBackgroundImage] = React.useState("")
  
  const image = "https://source.unsplash.com/collection/583204/1600x900"

  function getImage() {
    setBackgroundImage(image => image)
    console.log("click") 
  }

  return( 
    <div>
    <div className="form">
    <input type="text" />
    <button onClick={getImage}>Get New Image</button>
    </div>
      <div className="image-container">
      <img src={backgroundImage}/>
      </div>
    </div>
  )
}

export default Image