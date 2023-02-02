// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoItem, onDeleteItem} = props
  const {title, id} = todoItem

  const onDelete = () => {
    console.log(id)
    onDeleteItem(id)
  }

  return (
    <li className="user-card-container">
      <div className="item-container">
        <p className="title">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
