import React from "react"

function Image () {
  const [backgroundImage, setBackgroundImage] = React.useState("")
  
  function getImage() {
    const image = `https://source.unsplash.com/collection/583204/random=${Math.random()}`
    setBackgroundImage(image)
    console.log("click") 
  }

  return( 
    <div>
    <div className="form">
    <input type="text" />
    <button onClick={getImage}>Get New Image</button>
    </div>
      <div className="image-container">
      <img src={backgroundImage} onLoad={(event) => event.target.style.display = 'inline-block'}/>
      </div>
    </div>
  )
}

export default Image