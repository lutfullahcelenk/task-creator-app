import React from 'react';
import "./App.css";
import Header from './components/Header';
import Tasks from './components/Tasks';
import {initialState} from "./store/initialStates";

function App() {
    return (
        <div className="container">

            <Header 
                title = "Task Creator"    
            />

            <Tasks />

        </div>
    )
}

export default App
