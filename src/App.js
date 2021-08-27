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

    return (
        <div className="container">

            <Header 
                title = "Task Creator"
                toggleShow = {toggleShow}
                isTaskBarShowed= {isTaskBarShowed}    
            />

            {isTaskBarShowed? <CreateTask onCreate={onCreate} /> : null}

            <Tasks 
                tasks= {tasks}
                onDelete={onDelete}
            />

        </div>
    )
}

export default App
