import React from 'react';
import whale from '/client/images/whale.png'
import astronaut from '/client/images/Astronaut.png'
import happyFace from '/client/images/Happy_Face.png'
import waves from '/client/images/waves.png'
import sun from '/client/images/sun.png'
import kite from '/client/images/kite.png'


class DropdownButtons extends React.Component{


changeColor(color){
  
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');

  context.fillStyle = color;
  context.fillRect(0, 0, 450, 450)
}

addCharacter(char){
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');

  let character = new Image();
  character.src = char;
  character.onload = function (){
    context.drawImage(character, 0,0, 450, 450);
  }
}

addItem(choice){
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext('2d');

  let item = new Image();
  item.src = choice;
  item.onload = function (){
    context.drawImage(item, 0,0, 450, 450);
  }
}

  render() {
      return ( 
        <div className="dropdown">
        <section className="colorSection">
        <button id="colorButton">Color</button>
        <div id="dropdown-content-color">
          <a href="javascript:void(0)" onClick={() => this.changeColor("white")} >White</a>
          <a href="javascript:void(0)" onClick={() => this.changeColor("red")} >Red</a>
          <a href="javascript:void(0)" onClick={() => this.changeColor("blue")}>Blue</a>
          <a href="javascript:void(0)" onClick={() => this.changeColor("green")}>Green</a>
          <a href="javascript:void(0)" onClick={() => this.changeColor("grey")}>Grey</a>
        </div>
        </section>
        <section className="characterSection">
        <button id="characterButton">Character</button>
        <div className="dropdown-content-character">
          <a href="javascript:void(0)" onClick={() => this.addCharacter(whale)} >Whale</a>
          <a href="javascript:void(0)" onClick={() => this.addCharacter(astronaut)}>Astronaut</a>
          <a href="javascript:void(0)" onClick={() => this.addCharacter(happyFace)}>Happy Face</a>
        </div>
        </section>
        <section className="itemSection">
        <button id="itemButton">Item</button>
        <div className="dropdown-content-item">
          <a href="javascript:void(0)" onClick={() => this.addItem(waves)}>Waves</a>
          <a href="javascript:void(0)" onClick={() => this.addItem(sun)}>Sun</a>
          <a href="javascript:void(0)" onClick={() => this.addItem(kite)}>Kite</a>
        </div>
        </section>
      </div>
    )
  }
}

export default DropdownButtons;