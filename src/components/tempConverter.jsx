import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function TempConverter() {
  const [name, setName] = React.useState('');
  const [nameTwo, setNameTwo] = React.useState('');

  const changeDeg = (elOne, elTwo) => {
    if (elOne !== "") {
        let result = (elOne * 9/5) + 32;
        setNameTwo(result.toFixed(2));
        
    } else {
        let result = (elTwo - 32) * 5/9;
        setName(result.toFixed(2));
        
    }
  }
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Цельсий"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        id="outlined-uncontrolled"
        label="Фаренгейт"
        value={nameTwo}
        onChange={(event) => {
            setNameTwo(event.target.value);
          }}
      />
      <Button variant="contained" onClick={() => changeDeg(name, nameTwo)}>Конвертировать</Button>
    </Box>
  );
}
