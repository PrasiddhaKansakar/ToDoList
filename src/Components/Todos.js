import React from 'react'
import { ACTIONS } from '../Constants/ActionConstants'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {styles} from "../Constants/StyleConstants";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

export default function Todos({todo, dispatch}) {
  return (
    <div>
      <Grid xs={12} item key={todo.index}>
      <Paper elevation={3} style={styles.Paper}>
      <span className='todoDisplay' style={{color: todo.complete ? '#AAA' : '#000'}}>
        {todo.name}
      </span>
      <Button style={styles.Button1} onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO, payload:{id: todo.id}})}><DoneIcon/></Button>
      <Button style={styles.Button2} onClick={()=>dispatch({type:ACTIONS.DELETE_TODO, payload:{id: todo.id}})}><DeleteIcon/></Button>
      </Paper>
      </Grid>
    </div>
  )
}
