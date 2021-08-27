import React, { useState } from "react";

function CreateTask() {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const handleTextChange = (e) => {setText(e.target.value)}
  const handleDayChange = (e) => {setDay(e.target.value)}

  const onSubmit = (e) => {
      e.preventDefault()
      if(!text || !day){
          alert("Please fill both fields")
      }else{
          
          setText("")
          setDay("")
      }
  }

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="task">Task</label>
          <input
            id="task"
            name="text"
            type="text" 
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            id="day"
            name="day"
            type="text" 
            value={day}
            onChange={handleDayChange}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
}

export default CreateTask;
