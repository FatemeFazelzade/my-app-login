import * as React from 'react';
import "./login.css"
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';




function App() {

  const navStyle={borderBottom: "solid .1rem white", padding: "1.5rem", backgroundColor:' rgb(255, 255, 255, 0.8)'};
  const textStyle={margin:'15rem 0', fontSize: '2rem',}


  return (
    <div>
      <nav style={navStyle}>
      <Grid align='center'>
        <Link className='link' to="/">About us</Link>     
        <Link className='link' to="/Login">Log in</Link>
      </Grid>
      </nav>
      <Grid  align='center'>
        <div className='text'  style={textStyle}>
      <h1>Phey shop</h1>
      <h3>Welcome to Phey shop :)</h3>
      </div>
      </Grid>
    </div>  );
}

export default App;
 