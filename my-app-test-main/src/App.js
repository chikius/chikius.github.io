import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import goblinThink from './goblinThink.gif';
import goblinKnow from './goblinKnow.gif';
import goblinIdle from './goblinIdle.gif';

class App extends Component {

  state = {
    currentShowValue: "",
    goblinState: goblinIdle
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }
  
  handleClick = event => {
    this.clearQuestionBox()
    let goblinState = goblinThink
    this.setState({goblinState})
    setTimeout(() => {this.produceAnswer()}, 3000)
    setTimeout(() => {
        let goblinState = goblinIdle
        let currentShowValue = "";
        this.setState({goblinState})
        this.setState({currentShowValue})
    }, 10000)
  }

  clearQuestionBox() {
    document.getElementById('1').value = '';
  }

  produceAnswer() {
    var replyDictionary = {
        1: "ფიქრი ფულია მეგობარო",
        2: "ეგ რო მცოდნოდა აქ არ ვიქნებოდი",
        3: "აბა შენით დაფიქრდი",
        4: "ალექსა დები იშხნელების ან კი ან არა ჩართე",
        5: "09 კი არ ვარ მე",
        6: "ზოგჯერ სწორი პასუხი არ არსებობს",
        7: "მე ფალოსოფოსი ვარ ფილოსოფოსი კი არა",
        8: "მოცულობით კითხვებს ერიდე"
      };
      var randomNum = this.getRandomInt(1,9)
      var currentShowValue = replyDictionary[randomNum]
      let goblinState = goblinKnow
      this.setState({goblinState})
      this.setState({currentShowValue})
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>{this.state.currentShowValue}</h1>
        <p>
        <img src={this.state.goblinState}/>
        </p>
        <p>
        <Button variant="outline-primary" onClick={this.handleClick} >აბა ერთი გობლინს ჰკითხე</Button>
        </p>
        <p>
        <input id='1' type="text"></input>
        </p>
      </header>
    </div>
  );
}
}
export default App;