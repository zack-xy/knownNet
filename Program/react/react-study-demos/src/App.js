import React, { Component } from 'react'
import AddColorForm from './components/AddColorFormFun1';
import ColorList from './components/Colors/ColorList'
import {v4} from 'uuid'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      colors: [],
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({colors})
    console.log('colors>>>>', colors)
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color => 
      (color.id !== id) ? 
          color:
          {
            ...color,
            rating
          }
    )
    this.setState({colors})
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id)
    this.setState({colors})
  }

  render() {
    const {addColor, rateColor, removeColor} = this
    const {colors} = this.state
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor}/>
        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor}/>
      </div>
    )
  }
}
