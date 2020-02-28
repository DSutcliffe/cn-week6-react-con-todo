// import React, { Component } from 'react'

// class TodoItems extends Component {

//   createTasks = (item) => {
//     return (
//       <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
//         {item.text}
//       </li>
//     )
//   }
  
//   render() {
//     const todoEntries = this.props.entries
//     const listItems = todoEntries.map(this.createTasks)

//     return <ul className="theList">{listItems}</ul>
//   }
// }

// export default TodoItems

import React, { Component } from 'react'

class TodoItems extends Component {

  createTasks = (item) => {

    const todoList = item.length ? (
      item.map(item => {
        return (
          <div className="collection-item" key={item.id}>
          <span>{item.content}</span>
          </div>
        )
      })
    ) : (
      <p className="center">You jave no todos left</p>
    )
  }

  render() {
    return (
      <div className="todos collection">
        {this.createTasks}
      </div>
    )
  }
}

export default TodoItems