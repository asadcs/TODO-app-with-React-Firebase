import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, FormHelperText, Input, InputLabel } from "@material-ui/core";
import ToDo from "./ToDo";
import { db } from "./firebase";
import firebase from "firebase"

function App() {
  const [input, setInput] = useState("");
  // const [todos, setTodos] = useState([
  //   "Send an email update to the team: 9am today",
  //   "Call the design agency to finalize mockups: 1:00pm today",
  //   "Touch base with recruiters about new role: Tuesday",
  //   "Meet with the engineering team: Thursday",
  // ]);

  const [todos, setTodos] = useState([]);

useEffect(() => {
  db.collection('todos').onSnapshot(snapshot=>{
    setTodos(snapshot.docs.map(doc=>doc.data().todo))
  })
}, [])

  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const AddToDo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    // console.log("Hello the button is clicked");
    // setTodos([...todos, input]);
    setInput("");
  };

  return (
    <Container>
    <div className="App">
      <h1>Hello asadcs</h1>

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Write a ToDo</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text"  value={input} onChange={onChangeHandler} />
          
        </FormControl>

        {/* <input /> */}
        {/* <button type="submit" onClick={AddToDo}></button> */}
        <Button
          type="submit"
          onClick={AddToDo}
          variant="contained"
          color="secondary"
          text="Add Todo"
          disabled={!input}
        >
          Secondary
        </Button>
      </form>
      <div>
        {todos.map((todo, idx) => (
          // <li key={idx}>{todo}</li>
          <ToDo idx={idx} todo={todo} key={idx}></ToDo>
        ))}
      </div>
    </div>
    </Container>
  );
}

export default App;
