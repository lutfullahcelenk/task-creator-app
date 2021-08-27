import {useState} from 'react';
import "./App.css";
import CreateTask from './components/CreateTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {initialState} from "./store/initialStates";

function App() {

    const [tasks,setTasks] = useState(initialState)
    const [isTaskBarShowed,setIsTaskBarShowed] = useState(true)

    //Show and Hide TaskBar
    const toggleShow = () => setIsTaskBarShowed(!isTaskBarShowed)

    //create a Task
    const onCreate = (task) => {
        const id = Date.now()
        const newTask = {id,...task}
        setTasks((prevState) => [...prevState,newTask])
    }

    //delete Task
    const onDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //toggleDone
    const toggleDone = (id) => {
        setTasks(
            tasks.map((task) => 
                task.id === id ? {...task, isDone : !task.isDone} : task
            )
        )
    }

    return (
        <div className="container">

            <Header 
                title = "Task Creator"
                toggleShow = {toggleShow}
                isTaskBarShowed= {isTaskBarShowed}    
            />

            {isTaskBarShowed? <CreateTask onCreate={onCreate} /> : null}

           
            {tasks.length>0 ? (<Tasks tasks= {tasks} onDelete={onDelete} toggleDone={toggleDone}  />) : <p>No Task to Show</p> }
           

        </div>
    )
}

export default App
