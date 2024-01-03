import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState(); 
  //(useState returns an array with 2 elements) 
  //(1st element is the state variable) (2nd element is a function to update the state variable

  const [data, setData] = useState([]); 

  const addData = () => {
    setData([...data, { name: name, email: email }]);  
    // ...data means all the previous data (spread operator)
    setName(""); 
    setEmail(""); 
    // to clear the input fields after adding data
  }

  const  removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

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
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      <div className="data">
        <div className="card">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element ,index) => { 
            return (
              <div key={index} className="card">
                <h4>{element.name}</h4>
                <h4>{element.email}</h4>
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => removeItem(index)} variant="outlined" color="error">
                    <DeleteIcon />
                  </Button>
                </Stack>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
