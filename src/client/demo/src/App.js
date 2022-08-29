import Title from "./components/Title";
import UserInput from "./components/UserInput";
import NerOutput from "./components/NerOutput";

import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState({result: []});
  const [loading, setLoading] = useState(false);

  const readDataFromPost = (d) => {setData(d);}
  
  return (
    <Box justifyContent="center" alignItems="center" display="flex" flexDirection="column">
      <Title />
      <UserInput readDataFromPost={readDataFromPost} loading={setLoading} />
      {
        loading ? <Typography>Loading</Typography> : <NerOutput data={data} />
      }
    </Box>
  );
}

export default App;
