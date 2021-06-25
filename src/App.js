
import React, {useState} from "react";
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import {ThemeProvider,createMuiTheme} from "@material-ui/core/styles";
import {Paper,Switch} from "@material-ui/core";

function App() {
  const [darkMode,setDarkMode] = useState(false);
  const theme = createMuiTheme({
      palette:{
       type:darkMode?"dark":"light",
      }
  })
  return (
    <ThemeProvider theme={theme}>
    <Paper style = {{height:"100vh"}}>
    
    <div className="app">

    <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} className="react-switch"/>
      {/*SideBar */}
      <Sidebar />
      
      {/*FeedBar */}
      <Feed />

      {/*Widgets */}
      <Widgets />
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
