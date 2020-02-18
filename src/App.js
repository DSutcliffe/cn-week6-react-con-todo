import React, { Component } from 'react'
import './css/App.css'
import TodoList from './components/TodoList.js'
import TodoItems from './components/TodoItems.js'

class App extends Component {

  state = {
    items: [],
    currentItem: {text:"", key:""}
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  handleInput = (e) => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }

    this.setState({
      currentItem
    })
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })

    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          currentItem={this.state.currentItem}
          handleInput={this.handleInput}
        />
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default App