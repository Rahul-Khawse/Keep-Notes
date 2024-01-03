import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField 
            value={name}
            onChange={(element) => setName(element.target.value)}
            id="outlined-basic" 
            label="Name" 
            variant="outlined" 
          />
          <TextField 
            value={email}
            onChange={(element) => setEmail(element.target.value)}
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
          />
          <Button 
            variant="contained" 
            color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
