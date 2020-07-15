import React, { Component } from 'react';
import './App.css';
import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";

class App extends Component {
  state = {
    word: ''
  }

  changeCountHandler = (event) => {
    this.setState({ word: event.target.value })
  }

  onDeleteLetterHandler = (index) => {
    const { state: { word } } = this
    let newWord = [...word.split('')]
    newWord.splice(index, 1)

    this.setState({
      word: newWord.join('')
    })
  }


  render() {

    const { state: { word }, changeCountHandler, onDeleteLetterHandler } = this

    const chars = !!word.length && word.split('').map((char, index) => (
        <Char
            key={index}
            char={char}
            onclick={ () => onDeleteLetterHandler(index) }
        />
    ))

    return <div className="App">
      <p>The text you inputed is {word.length} characters long</p>
      <div><input onChange={changeCountHandler} value={word}/></div>
      <Validation length={word.length}/>
      <div>
        { chars }
      </div>
    </div>;
  }
}

export default App;
