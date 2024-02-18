
import { useEffect, useState } from 'react'
import todoService from './services/todos'

import {
  Container,
  Divider,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Button
} from '@mui/material'

import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'



function App () {
  
  const [ todos, setTodos ] = useState([ { todo: 'You need to do something', done: true } ])
  const [ todoText, setTodoText] = useState('')
  
  
  useEffect(() => {
    
  const getTodos = async () => {
     const allTodos = await todoService.getTodos()
      setTodos(allTodos)
  }
    getTodos() 
  }, [])
  
  const handleChange = (event) => { 
    
      setTodoText(event.target.value)   
    
  }

  const newTodoSave = async () => {
    const todoObj = {todo:todoText}
    await todoService.setNewTodo(todoObj)
  }

  const sizeNote = () => {
    if (todoText.length < 15) {
      return 'too short!'
    }else if (todoText.length > 140) {
      return 'too long'
    } else {
      return 140 - todoText.length
    }
  }

  return (
    <Container >
      
      <Box sx={{ width: '100%', maxWidth: 900, minHeight: 700, height: 'contentFit', bgcolor: 'background.paper', backgroundImage: 'url(image.jpg)' }}>
        <ListItem>
          <Typography sx={{fontSize: 22, fontWeight: 'bold'}}> Tasks</Typography>        
      </ListItem>
      <Divider/>
      {
        todos.map(item => {
          return (
      <nav key={item.todo}>
        <List>                  
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.checked ? <CheckIcon color='primary'/> : <CloseIcon color='error'/>}
              </ListItemIcon>
              <ListItemText primary={item.todo}/>
            </ListItemButton>
          </ListItem>          
        </List>
      </nav>  
          )
        })
        }
        <Divider/>
      </Box>
      <form onSubmit={()=> newTodoSave()} style={{maxWidth: 900} }>
          <TextField
           fullWidth
            id="outlined-basic"
            label="New note"
            variant="standard"            
            onChange={handleChange}
            helperText={sizeNote()}
            value={todoText}
            
          />
        <Button type='submit' variant="contained" disabled={todoText.length > 140 || todoText.length < 1}>Save</Button>
        </form>
     
      
    </Container>
  );
}

export default App;
