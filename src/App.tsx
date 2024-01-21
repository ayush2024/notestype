import React from "react";
import Header from './components/Header'
import CreateNote from "./components/CreateNote";
import {Box} from '@mui/material'
import Notes from "./components/Notes";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Box  style={{ padding: 20 }}>
        <CreateNote />
        <Notes />
      </Box>
    </>
  )
}

export default App;