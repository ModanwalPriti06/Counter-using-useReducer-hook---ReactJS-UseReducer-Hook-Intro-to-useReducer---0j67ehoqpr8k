import React, { useReducer } from "react";
import "../styles/App.css";

const reducer = (state, action) => {
  if (action.type == "add") {
    return { count: state.count + 1 };
  } else if (action.type == "delete") {
    return { count: state.count - 1 };
  } else {
    return { count: (state.count = 0) };
  }
};
const initialTaskState = { count: 0 };
const App = () => {
  const [taskState, dispatch] = useReducer(reducer, initialTaskState);
  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({ type: "add" })} id="addTaskBtn">
        Add a task
      </button>
      <button onClick={() => dispatch({ type: "delete" })} id="delTaskBtn">
        Delete a task
      </button>
      <button
        onClick={() => dispatch({ type: "deleteAll" })}
        id="delAllTaskBtn"
      >
        Delete all tasks
      </button>
      <h3 className="counter">Number of Tasks : {taskState.count}</h3>
    </div>
  );
};

export default App;
