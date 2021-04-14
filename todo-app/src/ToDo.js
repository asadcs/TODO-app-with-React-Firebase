import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { db } from "./firebase";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function ToDo(props) {
  const classes = useStyles();
  const deleteTodo = (e, id) => {
    alert(id);
    db.collection("todos").doc(id).delete();
  };
  const { idx, todo } = props;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(todo.todo);

  // const handleOpen = (toDo) => {
  //   setOpen(true);
  // };
  const handleOpen = (e, todo) => {
    setOpen(true);
    // setInput(todo.todo)
  };



  const handleClose = () => {
    setOpen(false);
  };
  const updateTodos = () => {
    db.collection('todos').doc(todo.id).set({
        todo:input
    },{merge:true})
    setOpen(false);
  };


  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="ToDo"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {todo.todo}
              </Typography>
            </React.Fragment>
          }
        />

        {/* <EditIcon onClick={handleOpen}></EditIcon> */}
        <EditIcon
        // onClick={handleOpen}
        onClick={(e) => handleOpen(e, todo)}
        >
       
      </EditIcon>

        <DeleteIcon
          onClick={(e) => deleteTodo(e, todo.id)}
          type="button"
          variant="contained"
          color="primary"
          text="Delete"
        ></DeleteIcon>
      </ListItem>
     
    </List>
     <Modal
     open={open}
     onClose={handleClose}
     
   >
    <input type="text" value={input} onChange={onChangeHandler}></input>
    <Button
          type="button"
          onClick={updateTodos}
          variant="contained"
          color="secondary"
          text="Update Todo"
          disabled={!input}
        >
          Secondary
        </Button>

   </Modal>
   </>
  );
}
