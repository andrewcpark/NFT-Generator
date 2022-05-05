import React, { Component } from 'react';
import { render } from 'react-dom';
import DropdownButtons from './dropdownButtons.js';
import NftCanvas from './nftCanvas.js';
import ImagesContainer from './savedImagesContainer.js';


class App extends Component{
   constructor(props){
      super(props);
      this.state = {};

      this.handleDownload = this.handleDownload.bind(this);
      this.handleSave = this.handleSave.bind(this);
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
      let canvas = document.getElementById("canvas");
      let dataURL = canvas.toDataURL("image/png", 1.0);

      console.log("save is clicked")
  
      fetch('/uploadToDB', {
         method: 'POST',
         body: JSON.stringify({
            image: dataURL
         })
      })
   }

   render(){
      return(
         <div>
            <h1>NFT GENERATOR</h1>
            <div className="canvasContainer">
                <ImagesContainer/><NftCanvas/> <DropdownButtons/>
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