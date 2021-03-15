import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/v1/tasks")
      .then((res) => res.json())
      .then((resData) => setData(resData.tasks));
  }, []);

  const renderTask = (task) => {
    return (
      <div>
        <h4>{task?.title}</h4>
        <p>{task?.description}</p>
        <p>{task?.dueDate?.toString()}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <div>{!data ? "Loading..." : data.map(renderTask)}</div>
    </div>
  );
}

export default App;
