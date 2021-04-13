import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Send an email update to the team: 9am today",
    "Call the design agency to finalize mockups: 1:00pm today",
    "Touch base with recruiters about new role: Tuesday",
    "Meet with the engineering team: Thursday",
  ]);
  return (
    <div className="App">
      <h1>Hello asadcs</h1>
      <input />
      <button>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
