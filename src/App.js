import logo from './logo.svg';
import './App.css';
import TempConverter from './components/tempConverter';
import * as React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [name, setName] = React.useState('');
  const [showComponent, setShowComponent] = useState(false);
  const [arr, setArr] = useState([]);

  const handleClick = (name) => {
    
    setArr([...arr, <NewCard task={name} list={arr}/>])
    setShowComponent(true);
  };

    return (
      <> 
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="Добавить задачу"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Button onClick={() => {handleClick({name})}} variant="contained">Добавить</Button>
        </Box>
        <ul>
          {arr.map((item) => <li key={arr.indexOf(item)} > {item}</li>)}
        </ul>   
      </>);
}

function NewCard(someTask, list) {
  
  // delFunc =()=> {

  // }
  
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Задача
          </Typography>
          <Typography value="" variant="body2" sx={{ color: 'text.secondary' }}>
            {someTask.task.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  onClick={(e) => {console.log(e.currentTarget.parentElement.parentElement.parentElement.style.display = "none")}} color="primary">
          удалить
        </Button>
      </CardActions>
    </Card>
    </>
  );
}

export default App;
