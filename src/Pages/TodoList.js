import React, {useState, useReducer} from 'react'
import Todos from "../Components/Todos"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { ACTIONS } from '../Constants/ActionConstants'
import {styles} from "../Constants/StyleConstants";

function reducer(todos, action){
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return (todos.map(todo =>{
                if(todo.id===action.payload.id){
                    return {...todo, complete: !todo.complete}
                }
                return todo
            }))
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name){
    return {id: Date.now(), name: name, complete: false};
}

export default function TodoList() {

    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
        setName('')
    }

    return (
        <Container maxWidth="sm">
            <Box style={styles.Box} sx={{boxShadow: 3}}>
                <h1 className='mainHeading'>React ToDo List</h1>

                <form className='formStyle' onSubmit={handleSubmit}>
                    <span className='whatToText'>What to do?</span>
                    <input className='inputBox' type="text" value={name} onChange={e => setName(e.target.value)}/>
                </form>
                
                {todos.map(todo =>{
                    return <Todos key={todo.id} todo={todo} dispatch={dispatch}/>
                })}
            </Box>
        </Container>
  )
}