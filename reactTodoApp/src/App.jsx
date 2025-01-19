import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 
  const [editTodo, setEditTodo] = useState(''); 
  const [editIndex, setEditIndex] = useState(null); 
  const [modalVisible, setModalVisible] = useState(false); 
  const [filter, setFilter] = useState('all'); 

 
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };


  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };


  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditTodo(todos[index].text);
    setModalVisible(true);
  };


  const handleSaveEdit = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? { ...todo, text: editTodo } : todo
    );
    setTodos(updatedTodos);
    setModalVisible(false);
  };


  const handleCancelEdit = () => {
    setModalVisible(false);
  };


  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true; 
  });

  return (
    <>
     
      {modalVisible && (
        <div className="edit-bg">
          <div className="modal">
            <h2>Edit</h2>
            <input
              type="text"
              className="editing"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
            />
            <div className="choice">
              <button className="save" onClick={handleSaveEdit}>
                Save
              </button>
              <button className="cancel-edit" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <h1>To Do App</h1>

      <div className="container">
       
        <div className="buttons">
          <button className="all" onClick={() => setFilter('all')}>
            All To Dos
          </button>
          <button className="completed" onClick={() => setFilter('completed')}>
            All Completed To Dos
          </button>
          <button className="pending" onClick={() => setFilter('pending')}>
            All Pending To Dos
          </button>
          <button
            className="clear"
            onClick={() => setTodos([])} 
          >
            Clear All
          </button>
        </div>

    
        <div className="box">
          <div className="adding">
            <input
              type="text"
              className="todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Enter a new task"
            />
            <button className="add" onClick={handleAddTodo}>
              ADD
            </button>
          </div>
        </div>
        <hr />

        
        <div className="added">
          {filteredTodos.map((todo, index) => (
            <div className="block" key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
              />
              <h2
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </h2>
              <div className="icons">
                <i className="fas fa-edit" onClick={() => handleEditTodo(index)}></i>
                <i className="fas fa-trash" onClick={() => handleDeleteTodo(index)}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
