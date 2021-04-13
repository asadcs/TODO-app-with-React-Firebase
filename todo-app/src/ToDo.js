import { Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));
  
export default function ToDo(props) {
    const classes = useStyles();

    const{idx,todo}=props
    return (
       
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
                 {todo}
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        </List>
       
    )
}
