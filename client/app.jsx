import React, { Component } from 'react';
import { render } from 'react-dom';
import DropdownButtons from './dropdownButtons.js';
import NftCanvas from './nftCanvas.js';
import ImagesContainer from './savedImagesContainer.js';


class App extends Component{
   constructor(props){
      super(props);
      this.state = {
         images: []
      };

      this.handleDownload = this.handleDownload.bind(this);
      this.handleSave = this.handleSave.bind(this);
   }
   
   componentDidMount() {
      fetch('/getImages')
        .then (res => res.json())
        .then (data => {
         this.setState({images: data});
        // console.log('data from database:', data)
        });
      }
    

   handleDownload (){
      let canvas = document.getElementById("canvas");
      let image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
      let link = document.createElement('a');
      link.download = "myNFT.png";
      link.href = image;
      link.click();
   
   }

   handleSave (){
      const imageData = {
         color: "grey",
         character: "astronaut",
         item: "waves"
      }

      fetch('/uploadToDB', {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(imageData),
         })
         .then(response => response.text())
         .then (data => {
            alert('Successfuly Saved', data)
         })
         .catch ((error) => {
            alert("Error with saving")
         })
      }


   render(){
      // console.log(this.state)
      return(
         <div>
            <h1>NFT GENERATOR</h1>
            <div className="canvasContainer">
              { this.state.images.length > 0 && <ImagesContainer imageData = {this.state.images}/> }<NftCanvas/> <DropdownButtons/>
            </div>
            <div className="buttonSection">
            <button onClick={this.handleDownload} id="downloadButton"> DOWNLOAD </button>
            <button onClick={this.handleSave} id="saveButton"> SAVE </button>
            </div>
         </div>
      );
   }
}
export default App;