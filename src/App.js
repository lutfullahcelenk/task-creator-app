import {useState} from 'react';
import "./App.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
import {initialState} from "./store/initialStates";

function App() {

    const [tasks,setTasks] = useState(initialState)


    return (
        <div className="container">

            <Header 
                title = "Task Creator"    
            />

            <Tasks 
                tasks= {tasks}
            />

        </div>
    )
}

export default App
