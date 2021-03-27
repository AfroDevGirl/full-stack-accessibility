import React, { useEffect, useState } from "react";

const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/v1/tasks")
      .then((res) => res.json())
      .then((resData) => setData(resData.tasks));
  }, []);

  const renderTask = (task) => {
    return (
      <div key={task?.title}>
        <h2>{task?.title}</h2>
        <p>{task?.description}</p>
        <p>{task?.dueDate?.toString()}</p>
      </div>
    );
  };

  return (
    <>
      <h1>All Tasks</h1>
      <div>{!data.length ? "Loading..." : data.map(renderTask)}</div>
    </>
  );
};

export default Tasks;
