import {useState} from 'react';
import "./App.css";
import CreateTask from './components/CreateTask';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {initialState} from "./store/initialStates";

function App() {

    const [tasks,setTasks] = useState(initialState)
    const [isTaskBarShowed,setIsTaskBarShowed] = useState(false)

    //Show and Hide TaskBar
    const toggleShow = () => setIsTaskBarShowed(!isTaskBarShowed)

    //create a Task
    


    return (
        <div className="container">

            <Header 
                title = "Task Creator"
                toggleShow = {toggleShow}
                isTaskBarShowed= {isTaskBarShowed}    
            />

            {isTaskBarShowed? <CreateTask /> : null}

            <Tasks 
                tasks= {tasks}
            />

        </div>
    )
}

export default App
