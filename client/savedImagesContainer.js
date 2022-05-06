import React from 'react';


class ImagesContainer extends React.Component{
  constructor(props){
    super(props)
  }
  
  render() {
    const savedImages = this.props.imageData
    const arr = [];
    for (let i = 0; i < savedImages.length; i++) {
      arr.push(<div>{`Color:` + " " + `${savedImages[i].color}` + " " + `Character:`+ " " + `${savedImages[i].character}` + " " + `Item:` + " " + `${savedImages[i].item}`}</div>)
      console.log(arr)
    }
    // const test = this.props.imageData[0].color;
    // console.log(this.props.imageData[0].color)
      return ( 
        <div className="imagesContainer">
          <h1> Saved Images </h1>
          <section className= "imagesData">{ arr } </section>
        </div>
    )
  }
}

export default ImagesContainer;