import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
    <div className="modal-bg">
        <div className="modal">
            <h2>Are you sure you want to clear all the data?</h2>
            <div className="choice">
                <button className="cleard">Clear</button>
                <button className="cancel">Cancel</button>
            </div>
        </div>
    </div>

    <div className="edit-bg">
        <div className="modal">
            <h2>Edit</h2>
            <input type="text" className="editing" />
            <div className="choice">
                <button className="save">Save</button>
                <button className="cancel-edit">Cancel</button>
            </div>
        </div>

    </div>

    <h1>To Do App</h1>

    <div className="container">
        <div className="buttons">
            <button className="all">All To Dos</button>
            <button className="completed">All Completed To Dos</button>
            <button className="pending">All Pending To Dos</button>
            <button className="clear">Clear All</button>



        </div>

        <div className="box">
            <div class="adding">
                <input type="text" class="todo"/>
                <button class="add">ADD</button>
            </div>
        </div>
        <hr/>

        <div className="added">

        </div>

    </div>
    </>
  )
}

export default App
