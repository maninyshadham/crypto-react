import { AppBar, Container, MenuItem, Select, Toolbar, Typography, makeStyles,createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
      }
}));

const Header = () => {
  const {currency,setCurrency} = CryptoState();
  console.log("currency",currency);
  const history = useHistory();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const classes = useStyles();  
  return (
    <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
            <Container>
                <Toolbar>
                    <Typography variant='h6' onClick={() => history.push("/")} className={classes.title}>Crypto Hunter</Typography>
                    <Select variant='outlined' style={{ width: 100, height: 40, marginRight: 15 }} value={currency} onChange={(e) => {
                      setCurrency(e.target.value);
                    }}>
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  )
}

export default Header
