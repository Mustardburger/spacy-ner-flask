
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import axios from "axios";

function App() {

  const [inputText, setInputText] = useState("");
  const [outputHTML, setOutputHTML] = useState("");


  const extractEntity = async () => {

    const url = "http://localhost:5000/predict-pretty";
    try {
      const data = { "input_text": inputText };
      const response = await axios.post(url, data);
      if (response.status === 200) {
        console.log('success stuff');
        setOutputHTML(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeInput = (event) => {
    setInputText(event.target.value);
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      style={{ padding: 32 }}
    >
      <Typography variant="h4">Welcome to Named Entity Recognition!</Typography>

      <TextField
        id="outlined-multiline-static"
        label="Input your conversation here"
        multiline
        rows={8}
        style={{ width: 600, marginTop: 32 }}
        value={inputText}
        onChange={handleChangeInput}
      />

      <Button variant="text" onClick={extractEntity} style={{ marginTop: 16, marginBottom: 16 }}  >Extract</Button>

      <Box display="flex" alignItems="center" justifyContent="center" style={{ width: 800 }}>
        <div dangerouslySetInnerHTML={{ __html: outputHTML }} />
      </Box>

    </Box>
  );
}

export default App;
